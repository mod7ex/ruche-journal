import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Wi5YIeAkH_Hh85djXD55_nNtaYVaI20",
  authDomain: "ruche-journal.firebaseapp.com",
  projectId: "ruche-journal",
  storageBucket: "ruche-journal.firebasestorage.app",
  messagingSenderId: "841423963680",
  appId: "1:841423963680:web:c3740547c6374e63d91e45",
  measurementId: "G-9K31P52B1J"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const handleGoogleLogin = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        alert("Logged in with Google!");
    } catch (error) {
        console.log(error);
    }
};

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    alert("Signed out successfully!");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const db = getFirestore(app);



/**
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2026, 12, 18);
    }
  }
}
*/