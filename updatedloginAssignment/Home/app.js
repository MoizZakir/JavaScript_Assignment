import { getData, getLoggedInUser, logout, updateData, uploadFile } from "../utils/functions.mjs";

// let userId;
// let count=1;
// let veiwname=document.getElementById('viewname')
// let sideBar=document.querySelector('.sidebar')

// let Updatediv=document.getElementById('Updatediv')

// let upassword=document.getElementById('upassword')
// let sidebar=document.querySelector('.sidebar')
// let brandname=document.querySelector(".mybrand " )
// // let postStart=document.querySelector('#postStart')
// let myprof=document.querySelector('#myprof');
let uname=document.getElementById('uname')
let uemail=document.getElementById('uemail')
let phnum=document.querySelector('#phnum')
let hobby=document.querySelector('#hobby')
let profpic=document.querySelector('#profpic')
let discription=document.querySelector('#discription')
let logoutbtn=document.querySelector('#logout');
let navimg=document.querySelector('#navimg');
let main=document.querySelector('#main');
let update=document.querySelector('#update');
let postman;

let uid;
let userAllData;
const userStatus=async ()=>{
  let loggedInuser=await getLoggedInUser()
  
  if (loggedInuser) {
    uid=loggedInuser.uid;
    console.log("===>>> user logged in", loggedInuser)

    // get user data from db
    const userData = await getData(loggedInuser.uid, "users")
    if (userData.status) {
      console.log("===>>> user data", userData.data)
      userAllData=userData.data
      console.log("===>>> user data", userData.data.profilePicture)
      if(userData.data.profilePicture) {
        navimg.src=userData.data.profilePicture}

      
    } else {
      console.log("===>>> user data not found")
    }
  } else {
    console.log("===>>> user not logged in")
    window.location.href = "../index.html"
  }
}
userStatus()
//
const logoutHandler= async()=>{



  const userLoggedOut=await logout()
  console.log(userLoggedOut)

  if(userLoggedOut.status){
    window.location='../Login/index.html'
  }
    else{
      alert(userLoggedOut.message)
    }
}
logoutbtn.addEventListener('click',logoutHandler)

window.userProfile=()=>{
  let myprofileHtml=`<div class="card" style="width: 23rem;">
<img height='180px'width='130px' src="${(userAllData.profilePicture)?userAllData.profilePicture :"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}" class="card-img-top" alt="..." id='profilepic'>
<div class="card-body mt-0">
  <h5 class="card-title" id='profilename'>${userAllData.username}</h5>
  <p class="card-text"  id='profiledescription'>${(userAllData.Description)?userAllData.Description:'No Description'}</p>
</div>
<ul class="list-group list-group-flush mt-0">
  <li class="list-group-item"  id='profileemail'>${userAllData.userEmail}</li>
  <li class="list-group-item"  id='profilphone'>${(userAllData.phone)?userAllData.phone:'No phone Number'}</li>
  <li class="list-group-item"  id='profilhobbies'>${(userAllData.hobby)?userAllData.hobby:'No hobbies'}</li>
</ul>



<button   id="edinfo " type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="width= 100px !important;">Edit Information</button>


</div>`
  main.innerHTML=``
  main.innerHTML=myprofileHtml

  userprofileData()
}
const userprofileData= async ()=>{
  uname.value=userAllData.username??userAllData.username;
uemail.value=userAllData.userEmail??userAllData.userEmail;
phnum.value=(userAllData.phoneNumber??userAllData.phoneNumber )||"";
hobby.value=(userAllData.hobby?? userAllData.hobby)||"";
discription.value=(userAllData.description?? userAllData.description)||"";
  

}
let updateprofileData={};
const userProfileUpdateHandler= async()=>{
  if(userAllData.userEmail){
    updateprofileData.userEmail=userAllData.userEmail
  }
  
  if(uname.value.length>0){
    updateprofileData.username=uname.value
  }
  else{
    updateprofileData.username=userAllData.username
  }
  if(phnum.value.length>0){
    updateprofileData.phoneNumber=phnum.value
  }
  else{
    updateprofileData.phoneNumber=userAllData.phoneNumber ||''
  }
  if(hobby.value.length>0){
    updateprofileData.hobby=hobby.value
  }
  else{
    updateprofileData.hobby=userAllData.hobby ||''
  }
  if(discription.value.length>0){
    updateprofileData.description=discription.value
  }
  else{
    updateprofileData.description=userAllData.description ||''
  }
  if(profpic.files[0]){
    const profilePictureName = `${new Date().getTime()}-${profpic.files[0].name}`

      const upload = await uploadFile(profpic.files[0], profilePictureName)
      if (upload.status) {
        updateprofileData.profilePicture = upload.downloadURL
        alert(upload.message)
      } else {
        alert(upload.message)
      }
    

  }
  else{
    updateprofileData.profilePicture=userAllData.profilePicture
  }

  const profileUpdate= await updateData(updateprofileData,uid,'users')
  if(profileUpdate.status){
    alert(profileUpdate.message)
  }
  else{
    alert(profileUpdate.message)
  }


}
update.addEventListener('click',userProfileUpdateHandler)


const postSubmitHandler=()=>{
  let postData={}
  



}





