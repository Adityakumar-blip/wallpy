import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  Firestore,
  setDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import app from "@/utils/firebase";

const auth = getAuth(app);
const db = getFirestore();

// Function to create user
const createUser = async (user) => {
  if (!user) return;
  console.log("users", user);

  try {
    const userRef = collection(db, "users");
    const snapshot = await addDoc(userRef, {
      userName: user.userName ? user?.userName : "",
      email: user.email,
      photoURL: "",
      createdAt: new Date(),
      id: user.id,
    });
    console.log("User document created with ID:", snapshot.id);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// Function to logout user
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      localStorage.removeItem("token");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};

// Function to get user by ID
const getUserById = async (userId) => {
  console.log("user id", userId);
  try {
    const q = query(collection(db, "users"), where("id", "==", userId));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      console.log("user data fetched", doc.data());
      return doc.data();
    } else {
      console.log("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    return "test";
  }
};

// function to add collects
const addCollects = async (userId, imageUrl) => {
  try {
    const collectsRef = doc(db, "collects", userId);
    const collectsSnapshot = await getDoc(collectsRef);

    if (collectsSnapshot.exists()) {
      const { images } = collectsSnapshot.data();
      const updatedImages = images ? [...images, imageUrl] : [imageUrl];
      await setDoc(collectsRef, { images: updatedImages });
    } else {
      await setDoc(collectsRef, { images: [imageUrl] });
    }

    console.log("Collect added successfully!");
  } catch (error) {
    console.error("Error adding collect:", error);
  }
};

export { createUser, logout, getUserById, addCollects };
