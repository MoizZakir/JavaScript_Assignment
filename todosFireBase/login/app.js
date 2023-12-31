import { auth, signInWithEmailAndPassword,onAuthStateChanged } from "../firebaseconfig.js";

let email=document.querySelector('#email')
let password=document.querySelector('#password')
let login=document.querySelector('#login')

onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid = user.uid;
      window.location='../home/index.html'
      // ...
    } else {
        // window.location='../login/index.html'
      // User is signed out
      // ...
    }
  });


const loginHandler=()=>{

    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        

      alert('loginSuccefully')
      window.location=`../home/index.html`
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)

    });
}
login.addEventListener('click',loginHandler)