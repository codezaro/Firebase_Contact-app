// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuK1RdQ7nJ9h4zpzoi3tbr3gf8T9qV1fA",
  authDomain: "vite-contact-777e3.firebaseapp.com",
  projectId: "vite-contact-777e3",
  storageBucket: "vite-contact-777e3.appspot.com",
  messagingSenderId: "292280663181",
  appId: "1:292280663181:web:ef1e4a8c687ff91ac1f6c4",
  measurementId: "G-L3K9YCEEC2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
