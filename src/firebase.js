// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD24IZphu29NPuJZBx530M0tFY0-kTpWc",
  authDomain: "authenticationproject-cca99.firebaseapp.com",
  projectId: "authenticationproject-cca99",
  storageBucket: "authenticationproject-cca99.appspot.com",
  messagingSenderId: "133144576974",
  appId: "1:133144576974:web:fa1ce3a0639e874c1a219f",
  measurementId: "G-9SVVJJYLGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

 export {app,auth}