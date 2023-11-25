let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')
let login=document.getElementById('login')
login.addEventListener('click',function(e){
    if(upassword.value!==localStorage.getItem('password') || uemail.value!==localStorage.getItem('email') ){
        alert('no data found')

    }
    else{
        alert('sucessFully Login')
    }

})