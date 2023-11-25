let uname=document.getElementById('uname')
let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')
let uconfirm=document.getElementById('uconfirmpassword')
let signup=document.getElementById('signup')


signup.addEventListener('click',function(e){
    if(uname.value==''&& uemail.value==''&& upassword.value==''){
        alert('please Type All feild')
    }
    else if(upassword.value!==uconfirm.value){
        alert('Password Not Matched')
    }
    else if(upassword.value.length<6){
        alert('password must be 6 character long')
    }
    else{
        localStorage.setItem('email',uemail.value)
        localStorage.setItem('password',upassword.value)
        window.location='./login.html'
    }
    e.preventDefault()

})