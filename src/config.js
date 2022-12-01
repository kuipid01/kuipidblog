// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import {getFireStore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrqwlOhAlsAlLmnTDlxvkj5wgD_gPk1Z0",
  authDomain: "blog-5df42.firebaseapp.com",
  projectId: "blog-5df42",
  storageBucket: "blog-5df42.appspot.com",
  messagingSenderId: "899792850753",
  appId: "1:899792850753:web:5a6b61010809e233b21bc0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
