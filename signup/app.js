let uname=document.getElementById('uname')
let uemail=document.getElementById('uemail')
let upassword=document.getElementById('upassword')
let uconfirm=document.getElementById('uconfirmpassword')
let signup=document.getElementById('signup')
let myArray=[]

// myArray.push({myemail:'moiz@gmail.com' ,mypass:111222 },{myemail:'zaka@gmail.com' ,mypass:333222 })
console.log(myArray)

// for(let i=0; i<myArray.length;i++){

//         localStorage.setItem(`data${i}`,JSON.stringify(myArray[i]))
        
//     }

// console.log((localStorage.getItem('data1').replace('" "','')))


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
        myArray.push({myemail:uemail.value ,mypass:upassword.value })
        // for(let i=0; i<myArray.length;i++){
       localStorage.setItem(`data`,JSON.stringify([{myemail:uemail.value ,mypass:upassword.value} ]))
            
        // }
        // localStorage.setItem('email',myArray[0].mypass)
        // localStorage.setItem('password',upasswor.value)
        window.location='./login.html'
    }
    e.preventDefault()

})