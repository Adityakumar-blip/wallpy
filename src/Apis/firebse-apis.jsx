import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import app from "@/utils/firebase";

const auth = getAuth(app);

// function to create user
const createUser = async (user) => {
  if (!user) return;
  console.log("users", user);
  const db = getFirestore();
  const userRef = collection(db, "users");
  const snapshot = await addDoc(userRef, {
    userName: user.userName ? user?.userName : "",
    email: user.email,
    photoURL: "",
    createdAt: new Date(),
    id: user.id,
  });
  console.log("User document created with ID:", snapshot.id);
};

const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out");
      localStorage.removeItem("token");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error signing out:", errorCode, errorMessage);
    });
};

export { createUser, logout };
