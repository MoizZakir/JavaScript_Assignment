let uname=document.getElementById('uname')
let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')
let uconfirmpassword=document.getElementById('uconfirmpassword')
let signup=document.getElementById('signup')
let login=document.getElementById('login')

if(JSON.parse(localStorage.getItem('loggedd user '))){
window.location='../Home/index.html'
}
let user=JSON.parse(localStorage.getItem('user')) || []
function signupHandler(){
if(uname.value ==''
    &&uemail.value ==''
    &&upassword.value ==''
    &&uconfirmpassword.value ==''
    ){
        return alert('please fill all feild ')
    }
if (uconfirmpassword.value !=upassword.value)return alert('Confirm Password doesnt match')

if(upassword.value.length<6) return alert('password must be atleats 6 character ')

let existUser=user.forEach((data)=>{
    if(data.userName==uname.value ||data.userEmail==uemail.value){
        return true
    }
})
if(existUser){
    return alert('user Already Exist')
}


let mydata={
    userName:uname.value
    ,userEmail:uemail.value
    ,userPassword:upassword.value
    ,userConfirmPassword:uconfirmpassword.value
    }
    console.log(user)
    user.push(mydata)
    localStorage.setItem('user',JSON.stringify(user))
    alert('SignUp Succesfully Now You have Login Form')
    
    setTimeout(()=>{window.location='../Login/index.html'},2000)

}  

function loginHandler(){
    if(JSON.parse(localStorage.getItem('user'))){
    window.location='../Login/index.html'}
    else{
        alert('Create Account First')
    }
}