import { auth, signInWithEmailAndPassword } from "../firebaseconfig.js"

// let user=JSON.parse(localStorage.getItem('user'))
// console.log(user)

//local storage wala code 
// if(!user){
//     window.location='../sigup/index.html'
// }
let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')

let login=document.getElementById('login')


function loginHandler(){
    if(uemail.value=="" && upassword.value==''){
        return alert('please fill all feild')
    }

    if(upassword.value.length<=7) return alert('password must be atleats 6 character ')
else{
    signInWithEmailAndPassword(auth, uemail.value, upassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('login Successfull')
    window.location='../Home/index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
    // local storage wala code he ye
    // let userdata=user.find((data)=>{
    //     if (data.userEmail==uemail.value)return true

    // })
    // console.log(userdata)
    // if(userdata){
    //     if(userdata.userPassword==upassword.value){
    //         localStorage.setItem('loggedd user ', JSON.stringify(userdata))
    //         window.location='../Home/index.html'
    //         return alert("Login Sucess Fully")
    //     }
    //     else{
    //         return alert('Invalid Credientails')
    //     }

    // }
    // else{
    //     return alert('User Not Exist')
    // }
}
login.addEventListener('click',loginHandler)