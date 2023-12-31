// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAly1yie_3UW8qL29CeVI78rT1y8WlHArI",
  authDomain: "guia-serve-73d14.firebaseapp.com",
  projectId: "guia-serve-73d14",
  storageBucket: "guia-serve-73d14.appspot.com",
  messagingSenderId: "663948503664",
  appId: "1:663948503664:web:ba42e02b5345e1ccc4e2b5",
  measurementId: "G-P1DREBDCP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
