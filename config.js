// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEQICTfyv7krwSm8mS7DrGFyG7lPfcg3I",
  authDomain: "trello-sample.firebaseapp.com",
  projectId: "trello-sample",
  storageBucket: "trello-sample.appspot.com",
  messagingSenderId: "626392210602",
  appId: "1:626392210602:web:54c117fd25237bed54c4d3",
  measurementId: "G-4DRQ96PM3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);