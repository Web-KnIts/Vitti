// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
const firebaseConfig = {
  apiKey: "AIzaSyA7BwnIIHYuLxzFX1MH2LTVpv_YjiJ39h4",
  authDomain: "vitti-3be83.firebaseapp.com",
  projectId: "vitti-3be83",
  storageBucket: "vitti-3be83.appspot.com",
  messagingSenderId: "690265754298",
  appId: "1:690265754298:web:7b282493c8ae5a54325083",
  measurementId: "G-8E539VJME8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;



