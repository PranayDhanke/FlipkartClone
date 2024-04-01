// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIK9IxesVry4q-467cY6ivO_p7-wnUPj8",
  authDomain: "flipkartclone-598a5.firebaseapp.com",
  projectId: "flipkartclone-598a5",
  storageBucket: "flipkartclone-598a5.appspot.com",
  messagingSenderId: "496086183135",
  appId: "1:496086183135:web:a5dfa0104bd24d33e64d6a",
  measurementId: "G-ZGJ3FBNWT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireauth = getAuth(app);
