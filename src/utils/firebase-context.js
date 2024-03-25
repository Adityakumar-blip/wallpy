import React, { createContext } from "react";
import { getApps, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore/lite";
import { Auth, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPFX7K-1T3seisLBVZykjgW9J0XEeE24s",
  authDomain: "wallpy-89a49.firebaseapp.com",
  projectId: "wallpy-89a49",
  storageBucket: "wallpy-89a49.appspot.com",
  messagingSenderId: "362449348066",
  appId: "1:362449348066:web:c774775220a621fb03c5bb",
};
export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);

export const FirebaseContext = createContext({
  db: db,
  auth: auth,
});

function FireBaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={{ db: db, auth: auth }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export default FireBaseProvider;
