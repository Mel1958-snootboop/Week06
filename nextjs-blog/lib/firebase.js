// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Y8lBfbzo-x4DPMHTGOPvOED2rncF8s0",
  authDomain: "week06-926ea.firebaseapp.com",
  projectId: "week06-926ea",
  storageBucket: "week06-926ea.firebasestorage.app",
  messagingSenderId: "344824638087",
  appId: "1:344824638087:web:eb065790d9211102b2a622",
  measurementId: "G-9BW1CC9XLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);