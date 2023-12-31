import { createUserWithEmailAndPassword,auth,onAuthStateChanged } from "../firebaseconfig.js";

let username=document.querySelector('#username')
let password=document.querySelector('#password')
let signup=document.querySelector('#signup')

onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const uid = user.uid;
    window.location='../home/index.html'
    // ...
  } else {
    // User is signed out
  
    // ...
  }
});


const signupHandler=()=>{
    createUserWithEmailAndPassword(auth, username.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Signup Succefully")
    window.location=`../login/index.html`
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}
signup.addEventListener('click',signupHandler)