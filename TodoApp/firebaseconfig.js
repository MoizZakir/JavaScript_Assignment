import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBk7QZRayFqAhBPOz2QQmEbXc96C6U0370",
    authDomain: "myfirsttest-1868f.firebaseapp.com",
    projectId: "myfirsttest-1868f",
    storageBucket: "myfirsttest-1868f.appspot.com",
    messagingSenderId: "283329572791",
    appId: "1:283329572791:web:85c6e3744730a25782c232"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export{app,db}
