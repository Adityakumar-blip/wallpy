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
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const auth = getAuth(app);
const storage = getStorage(app);

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

// function to get the collects
const getCollects = async () => {
  try {
    const collectsRef = doc(db, "collects", auth.currentUser.uid);
    const collectsSnapshot = await getDoc(collectsRef);

    if (collectsSnapshot.exists()) {
      const { images } = collectsSnapshot.data();
      console.log("images", images);
      return images;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Error", error);
  }
};

const uploadFileToStorage = async (file, onProgress) => {
  try {
    const convertedFile = new Blob([file], { type: file.type });
    const date = new Date();

    const bucket = ref(storage, `uploads/${date}_${file.name}`);
    let contentType = file.type;

    const uploadTask = uploadBytesResumable(bucket, convertedFile, contentType);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress(progress);
        console.log("Uplaod progress", progress);
      },
      (error) => {
        console.error("Error uploading file:", error);
        throw error;
      },
      () => {
        console.log("Upload complete!");
      }
    );

    await uploadTask;

    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

const uploadNewImage = async (uploadData) => {
  try {
    const collectsRef = doc(db, "uploads", auth.currentUser.uid);

    const imagesCollectionRef = collection(collectsRef, "images");
    await addDoc(imagesCollectionRef, {
      ...uploadData,
      user: auth.currentUser.uid,
    });

    console.log("Upload added successfully!");
  } catch (error) {
    console.error("Error adding upload:", error);
  }
};

const getAllUploads = async () => {
  try {
    const collectsRef = doc(db, "uploads", auth.currentUser.uid);
    const imagesCollectionRef = collection(collectsRef, "images");
    const querySnapshot = await getDocs(imagesCollectionRef);

    const uploads = [];
    querySnapshot.forEach((doc) => {
      uploads.push({ id: doc.id, ...doc.data() });
    });

    return uploads;
  } catch (error) {
    console.error("Error getting uploads:", error);
    return [];
  }
};

export {
  createUser,
  logout,
  getUserById,
  addCollects,
  getCollects,
  uploadFileToStorage,
  uploadNewImage,
  getAllUploads,
};
