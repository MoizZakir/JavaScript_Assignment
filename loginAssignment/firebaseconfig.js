import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {getFirestore, collection, addDoc,getDoc,updateDoc,doc,deleteDoc,setDoc ,query,getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth  ,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBk7QZRayFqAhBPOz2QQmEbXc96C6U0370",
    authDomain: "myfirsttest-1868f.firebaseapp.com",
    databaseURL: "https://myfirsttest-1868f-default-rtdb.firebaseio.com",
    projectId: "myfirsttest-1868f",
    storageBucket: "myfirsttest-1868f.appspot.com",
    messagingSenderId: "283329572791",
    appId: "1:283329572791:web:85c6e3744730a25782c232"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  export{app,query,getDocs ,auth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut, getFirestore, collection,db,setDoc, addDoc,getDoc,updateDoc,doc,deleteDoc}