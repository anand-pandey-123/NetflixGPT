// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtdPBOYuMgD2pUXxPeLkZsNYwjkHr2lqU",
  authDomain: "nteflixgpt.firebaseapp.com",
  projectId: "nteflixgpt",
  storageBucket: "nteflixgpt.appspot.com",
  messagingSenderId: "99088936240",
  appId: "1:99088936240:web:258182146fb22157b56cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
