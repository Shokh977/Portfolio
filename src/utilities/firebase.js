// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjs-blog-ea46c.firebaseapp.com",
  projectId: "nextjs-blog-ea46c",
  storageBucket: "nextjs-blog-ea46c.appspot.com",
  messagingSenderId: "800267276326",
  appId: "1:800267276326:web:c00d436f77ca6fd64a56e7",
  measurementId: "G-EXVNNW7K44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
