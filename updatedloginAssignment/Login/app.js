
import { login } from "../utils/functions.mjs"

// let user=JSON.parse(localStorage.getItem('user'))
// console.log(user)

//local storage wala code 
// if(!user){
//     window.location='../sigup/index.html'
// }
let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')
let loginbtn=document.getElementById('login')


const loginHandler=async ()=>{
  if(uemail.value==''||upassword.value=='')
  {
    return alert("please type your email and password")
  }
  else if(upassword.value.length<7){
    return alert('password character must be greater than 7')

  }
  else{
  const userLogin=await login(uemail.value,upassword.value)
  if(userLogin.status){
    alert(userLogin.message)
    window.location = "../Home/index.html"
  }
  else{
    alert(userLogin.message)
   
  }

}}
loginbtn.addEventListener('click',loginHandler)