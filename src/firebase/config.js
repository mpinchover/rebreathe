// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvgd8sYFDbJz5y1Pnr4M5ysO-wSBm1X9M",
  authDomain: "rebreathe-cfd2c.firebaseapp.com",
  projectId: "rebreathe-cfd2c",
  storageBucket: "rebreathe-cfd2c.firebasestorage.app",
  messagingSenderId: "931585745522",
  appId: "1:931585745522:web:c3e9384ad9d9c4b1f018eb",
  measurementId: "G-6HXW3CPHSS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
