import { addInDB, getAllDataOrderedByTimestamp, getData, getLoggedInUser, logout, updateData, uploadFile } from "../utils/functions.mjs";

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
let posttext =document.querySelector('#posttext');
let postimg =document.querySelector('#postimg');
let postbtn =document.querySelector('#postbtn');
let postArea =document.querySelector('#postArea');
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


const postSubmitHandler= async()=>{
  if (!posttext.value) {
    alert("Please enter post")
    return
  }
  const data = {
    post: posttext.value,
    authorId: uid,
  }
  if (postimg.files[0]){
    const imageName = `${new Date().getTime()}-${postimg.files[0].name}`
    const upload = await uploadFile(postimg.files[0], imageName)
    if (upload.status) {
      data.imageUrl = upload.downloadURL
      alert(upload.message)
    } else {
      alert(upload.message)
    }
  }
  const postAddInDB = await addInDB(data, "posts")
  if (postAddInDB.status) {
    alert(postAddInDB.message)
    posttext.value = ""
    postimg.value = ""
    // postDisplayHandler()
  } else {
    alert(postAddInDB.message)
  }
  }
postbtn.addEventListener('click',postSubmitHandler)

let a= []

const postDisplayHandler=async ()=>{
  postArea.innerHTML=``
  let allPost;

  const postData= await getAllDataOrderedByTimestamp('posts')
  if(postData.status){
    allPost=postData.data
    console.log(allPost)
  }
  else{
    console.log(postData.message)
  }
  
  allPost.forEach(async(e)=>{
    let b={}
    b.post=e.post
    b.userDetail= (await getData(e.authorId,'users')).data
    b.imageUrl=e.imageUrl
    a.push(b)
  })
  console.log(a)
  // console.log(a[0])

  
 
 
 

  // a.forEach((e)=>{
  //   console.log(e.userDetail.username)
  //   postArea.innerHTML+=`<div class="post-card">
  //   <div class="post-header" style="display: flex; justify-content: space-between;">
  //     <div>
  //     <img src="https://placekitten.com/40/40" alt="User Avatar" class="post-avatar">
  //     <strong>${e.userDetail.username}</strong> posted a status
  //   </div>
     
  //       <div style="" class="dropdown">
  //         <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style=background:none>
            
  //         </button>
  //         <ul class="dropdown-menu">
  //        <li style=' margin:10px 5px;'> <button class='modifybtn' style='background:none; border:none; ' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
  //         <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  //       </svg>Edit</button></li>
  //       <li style=' margin:10px 5px;'><button class='modifybtn' id='del' style='background:none; border:none; '><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i> Delete</button> </li>
  //         </ul>
  //       </div>
  //   </div>
  //   <div class="post-content">
  //     <p>This is the content of the post. It can contain text, images, or any other media.
        
  //     </p>
  //     <img src="https://firebasestorage.googleapis.com/v0/b/myfirsttest-1868f.appspot.com/o/1705222200937-WIN_20220919_07_28_19_Pro.jpg?alt=media&token=71cf6152-8a6f-4c40-8be4-14e6470090a" style="width: 100%;" height="200px"  alt="">
      
  //   </div>
   
  // </div>`




  // })


}

postDisplayHandler()
  









