// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBTZew3yQm4L9FAF3N9ZvPOm1ZTgoV259s",
    authDomain: "bikeapp-292fb.firebaseapp.com",
    projectId: "bikeapp-292fb",
    storageBucket: "bikeapp-292fb.appspot.com",
    messagingSenderId: "464802328174",
    appId: "1:464802328174:web:a09d8debec9c5c5c27807f",
    measurementId: "G-649LRXTRJ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);