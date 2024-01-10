let email=document.querySelector('#email')
let pass=document.querySelector('#pass')

let user=JSON.parse(localStorage.getItem('user'))
const forgetHandler=()=>{
   let findUser= user.find((e)=>{
        if (e.userEmail==email.value) return e
    })

if(findUser){
    findUser.userPassword= pass.value.length>=6 ? pass.value : alert('password Must be atleast 6 Character Long')
    findUser.userConfirmPassword= pass.value.length>=6 ? pass.value : console.log('no match')
    localStorage.setItem('user',JSON.stringify(user))
    alert('Change sucessfully')
}
else{
    alert('no user')
}


}
