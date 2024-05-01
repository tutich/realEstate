// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOCjBS2qbQy9hpbbUSLZz9HuAOlTAbqcw",
  authDomain: "realestate-645e9.firebaseapp.com",
  projectId: "realestate-645e9",
  storageBucket: "realestate-645e9.appspot.com",
  messagingSenderId: "1017011264764",
  appId: "1:1017011264764:web:202f36bc121e40c46d8b79",
  measurementId: "G-223L42LF15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);