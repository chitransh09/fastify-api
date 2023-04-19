import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjfowu4hV7rXUSXtMDy8bQ5guMbmXJffs",
  authDomain: "pragati-e9374.firebaseapp.com",
  databaseURL: "https://pragati-e9374-default-rtdb.firebaseio.com",
  projectId: "pragati-e9374",
  storageBucket: "pragati-e9374.appspot.com",
  messagingSenderId: "480047018659",
  appId: "1:480047018659:web:cc16433677bfde531d0516",
  measurementId: "G-XJ68PS6HR0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
