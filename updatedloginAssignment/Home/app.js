import { auth,addDoc,deleteDoc,updateDoc, signOut,onAuthStateChanged,getDoc,db,doc,setDoc,collection,query,getDocs } from "../firebaseconfig.js";
let userId;
let count=1;
let veiwname=document.getElementById('viewname')
let sideBar=document.querySelector('.sidebar')
let uemail=document.getElementById('uemail')
let Updatediv=document.getElementById('Updatediv')

let upassword=document.getElementById('upassword')
let sidebar=document.querySelector('.sidebar')
let brandname=document.querySelector(".mybrand " )
// let postStart=document.querySelector('#postStart')
let myprof=document.querySelector('#myprof');
let uname=document.getElementById('uname')
let phnum=document.querySelector('#phnum')
let hobby=document.querySelector('#hobby')
let profpic=document.querySelector('#profpic')
let discription=document.querySelector('#discription')
let logout=document.querySelector('#logout');
let postman;

onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const uid =  user.uid;
      userId=  user.uid
      // start()
  
      
      // ...
    } else {
        logoutHandler()
        
     
    }
  });



//localstorage wala data
// let {userName,userEmail,picurl,decr,hobbies,phone}=JSON.parse(localStorage.getItem('loggedd user '))
// brandname.textContent=`Welcome ${userName[0].toUpperCase()+userName.slice(1)}`   

// if(!(JSON.parse(localStorage.getItem('loggedd user ')))){
//     window.location='../Login/index.html'
//     }
// function clickHandler(){
//     ++count
//     if(count%2==0){
//         sideBar.classList.add('againtransform')
//         // sideBar.classList.remove('tranform')
//     }
//     else{
//         // sideBar.classList.add('transform')
//         sideBar.classList.remove('againtransform')

//     }
//     console.log(count)
// }
// let loggedData=JSON.parse(localStorage.getItem('loggedd user '))
function logoutHandler(){
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location='../Login/index.html'
      }).catch((error) => {
        // An error happened.
      });



    localStorage.removeItem('loggedd user ')
    
}


logout.addEventListener('click',logoutHandler)
 

//localstorage

//  let data=JSON.parse(localStorage.getItem('user'))

//  uname.value=userName
//  uemail.value=userEmail
//  phnum.value=phone ||" "
//  hobby.value=hobbies || " "
//  profpic.value=picurl || " "
//  discription.value=decr || " "


 window.updateHandler=async()=>{
    //  document.body.style.background='none'
    //  myprof.style.display='flex'
    


// console.log(forData
if(profpic.value!=' '){

await setDoc(doc(db, "user", userId), {
  
    userName:uname.value,

    phone:phnum.value,
    hobbies:hobby.value,
    picurl:profpic.value,
    decr:discription.value,
    userEmail:uemail.value
  })
}
else{
  await setDoc(doc(db, "user", userId), {
  
    userName:uname.value,

    phone:phnum.value,
    hobbies:hobby.value,
   
    decr:discription.value,
    userEmail:uemail.value
  })
  
}
    

    Updatediv.style.display='none'
    // localStorage.setItem('user',JSON.stringify(data))
    // localStorage.setItem('loggedd user ',JSON.stringify(loggedData))
    return alert('update succefully hai')
}

  
    
    

function modalClose(){
    Updatediv.style.display='none'
    document.body.style.background='none'
    myprof.style.display='flex'
}



let userUi=document.getElementById('users')


let postText=document.querySelector('#posttext')
let photobtn=document.querySelector("#photobtn")
let submitbtn=document.querySelector("#submitbtn")
let photUrl ;
window.getPhoto=()=>{
   
    photUrl=prompt('Enter Picture Link')
    
}

let mypost=JSON.parse(localStorage.getItem('posts')) || []


window.submitHandler= async()=>{
   
    console.log('moiz')
    userUi.innerHTML=''
    let postObj;
    if(photUrl){
        postObj={
            text:postText.value,
            imageurl:photUrl,
            userDetail:postman,
            Id: userId,
            like:[],
            comment:[]
            }
       
    }

    else if (photUrl===false  || postText.value!==''){
        postObj={
            text:postText.value,
            imageurl:'',
            userDetail:postman,
            Id: userId,
            like:[]
            ,comment:[]
            }
    
       
          
            
    }
    else return alert('Please Post Something')
    photUrl=''
    postText.value=''
    mypost.unshift(postObj)
    try {
      const docRef = await addDoc(collection(db, "posts"), postObj);
      console.log("Document written with ID: ", docRef.id);
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }



    // localStorage.setItem('posts',JSON.stringify(mypost))
    displayHandler()

  
  
}


async function userPostProfileHandler(){

  const docRef = doc(db, "posts", userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    // postman=docSnap.data()
    console.log(docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }


}

///
let postArea=document.querySelector("#postArea")
let postHtml;


async function start(){

  const docRef = doc(db, "user", userId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    postman=docSnap.data()
    console.log(postman)
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }




}
// async function h(){
//   console.log(await postman)
// }
// h()
let showPost=[]
 window.displayHandler=async()=>{
  
  const q = query(collection(db, "posts"))
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  showPost.push({postid:doc.id,postDetail:doc.data()})
});


    postStart.style.display='flex'
    myprof.style.display='none'
    
    
    
    let mypost=showPost
    console.log('mypost>>>'+mypost)
    userUi.innerHTML=''
    postArea.innerHTML=''

    mypost.forEach((data)=>{
        postHtml=` <div id='mycard' class="card my-3" style="width: 20rem; margin-bottom:50px height: fit-content;">
    
    <div class="card-body">

<div style='display:flex;justify-content:space-between;'>
<div style='display:flex; margin-left:-10px'>
<span><img src="${!(data.postDetail.userDetail.hasOwnProperty('picurl'))?'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=': data.postDetail.userDetail.picurl}" style='width:50px;height:50px ; border-radius:50%;'></span>    <p class="card-title pt-3">${data.postDetail.userDetail.userName}</p></div>
${(data.postDetail.Id==userId)?
`  
<div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style=background:none>
      
    </button>
    <ul class="dropdown-menu">
   <li style=' margin:10px 5px;'> <button class='modifybtn' style='background:none; border:none; ' onclick=editHandler("${data.postid}")><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg>Edit</button></li>
  <li style=' margin:10px 5px;'><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHanlder("${data.postid}")><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i> Delete</button> </li>
    </ul>
  </div></div>
  
  
  `:`</div>`}
  
  
  
  
  
  
  
  
 
    
 
  <h6 class="card-text" id='${data.postid}'>${data.postDetail.text}</h6>

    </div>
    ${(data.postDetail.imageurl)? `<img src="${data.postDetail.imageurl}" style='width:100%' class="card-img-top" alt="...">`:''}
    <div style='display:flex; justify-content:space-between; position:relative; top:20px; padding:0px'><p> 
    
    
    <svg xmlns="http://www.w3.org/2000/svg" id='${data.postDetail.Id}' style='margin:0px 5px; cursor:pointer;' onclick=likeHandler(${data.Id}) width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
  </svg>
  ${data.postDetail.like.length} Like</p>
  <div style='display:flex; flex-direction:column;'>
    <p class="btn-primary" data-bs-toggle="modal"  data-bs-whatever="@mdo"><svg  style='margin:0px 5px; cursor:pointer;' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
   </svg>${data.postDetail.comment.length} Commment</p>${(data.postDetail.comment.length>0)?`<p  style='position:relative; top:-30px; text-decoration:underline; cursor:pointer;' >See Comments</p>`:''}</div>
    </div>
    <div class='${data.postDetail.Id}'></div>
    </div>
    
    
    `
    //data-bs-target="#exampleModal2"
    postArea.innerHTML+=postHtml

    })
    
    
// z()
    

}

displayHandler()
// console.log(postman)


// post edit functions

let editItem;
window.editHandler=(myid)=>{
  let elem=document.getElementById(myid)

  console.log(elem)
  postText.value=elem.textContent
  submitbtn.textContent='Edit..'
  submitbtn.setAttribute('onclick',`editPostHandler("${myid}")`)


}
window.editPostHandler=async (nid)=>{
  const washingtonRef = doc(db, "posts", nid);

// Set the "capital" field of the city 'DC'

try{
await updateDoc(washingtonRef, {
  text: postText.value
});}
catch(e){
  console.log(e)
  
}
submitbtn.textContent=`Submit`
postText.value=``

submitbtn.setAttribute('onclick',`submitHandler()`)
displayHandler()
}






// delete function

window.deleteHanlder=async (did)=>{
    await deleteDoc(doc(db, "posts", did));
   
    displayHandler()
}


window.userPost = async()=>{
  mypost= []
   
    postStart.style.display='flex'
    myprof.style.display='none'
    const q = query(collection(db, "posts"))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  mypost.push({postid:doc.id,postDetail:doc.data()})
});


   
    

    userUi.innerHTML=''
    postArea.innerHTML=''

    console.log(mypost)
  mypost.filter((data)=>{
        if(data.postDetail.Id==userId) return true 

    })

    .
    forEach((data)=>{

      

      
            postHtml=` <div id='mycard' class="card my-3" style="width: 20rem; margin-bottom:50px">
        
            <div class="card-body">

            <div style='display:flex;justify-content:space-between;'>
            <div style='display:flex; margin-left:-10px'>
            <span><img src="${!(data.postDetail.userDetail.hasOwnProperty('picurl'))?'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=': data.postDetail.userDetail.picurl}" style='width:50px;height:50px ; border-radius:50%;'></span>    <p class="card-title pt-3">${data.postDetail.userDetail.userName}</p></div>
            ${(data.postDetail.Id==userId)?
            `  
            <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style=background:none>
                  
                </button>
                <ul class="dropdown-menu">
               <li style=' margin:10px 5px;'> <button class='modifybtn' style='background:none; border:none; ' onclick=editHandler("${data.postid}")><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
              </svg>Edit</button></li>
              <li style=' margin:10px 5px;'><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHanlder("${data.postid}")><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i> Delete</button> </li>
                </ul>
              </div></div>
              
              
              `:`</div>`}
              
              
              
              
              
              
              
              
             
                
             
              <h6 class="card-text" id='${data.postid}'>${data.postDetail.text}</h6>
            
                </div>
                ${(data.postDetail.imageurl)? `<img src="${data.postDetail.imageurl}" style='width:100%' class="card-img-top" alt="...">`:''}
                <div style='display:flex; justify-content:space-between; position:relative; top:20px; padding:0px'><p> 
                
                
                <svg xmlns="http://www.w3.org/2000/svg" id='${data.postDetail.Id}' style='margin:0px 5px; cursor:pointer;' onclick=likeHandler(${data.Id}) width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
              </svg>
              ${data.postDetail.like.length} Like</p>
              <div style='display:flex; flex-direction:column;'>
                <p class="btn-primary" data-bs-toggle="modal"  data-bs-whatever="@mdo"><svg  style='margin:0px 5px; cursor:pointer;' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
               </svg>${data.postDetail.comment.length} Commment</p>${(data.postDetail.comment.length>0)?`<p  style='position:relative; top:-30px; text-decoration:underline; cursor:pointer;' >See Comments</p>`:''}</div>
                </div>
                <div class='${data.postDetail.Id}'></div>
                </div>
                
                
                `
                //data-bs-target="#exampleModal2"
        
        postArea.innerHTML+=postHtml
    
        
        
        

    })
    z()
    
    

}



// my profile information 

let myprofileHtml=`<div class="card" style="width: 23rem;">
<img height='180px'width='130px' src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=" class="card-img-top" alt="..." id='profilepic'>
<div class="card-body mt-0">
  <h5 class="card-title" id='profilename'>Moiz</h5>
  <p class="card-text"  id='profiledescription'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush mt-0">
  <li class="list-group-item"  id='profileemail'>Email</li>
  <li class="list-group-item"  id='profilphone'>phonceNumber</li>
  <li class="list-group-item"  id='profilhobbies'>Hobbies</li>
</ul>



<button   id="edinfo " type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="width= 100px !important;">Edit Information</button>


</div>`
let udata;
window.Myprofile=async()=>{
   
    console.log(postman)
    const docRef = doc(db, "user", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      udata=docSnap.data()
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    
    // console.log(profileData)
    userUi.innerHTML=''
    postArea.innerHTML=''
    postStart.style.display='none'
    myprof.style.display='flex'
    myprof.innerHTML=myprofileHtml
    
let profilename=document.getElementById('profilename')
let profiledescription=document.getElementById('profiledescription')
let profileemail=document.getElementById('profileemail')
let profilphone=document.getElementById('profilphone')
let profilhobbies=document.getElementById('profilhobbies')
let profilepic=document.getElementById('profilepic')

profilename.innerText=udata.userName
profiledescription.innerText=(udata.hasOwnProperty('decr'))? udata.decr : 'no description yet'
profileemail.innerText=udata.userEmail
console.log(udata.userEmail)
profilphone.innerText=(udata.hasOwnProperty('phone'))?udata.phone :'No phone Number'
profilhobbies.innerText=(udata.hasOwnProperty('hobbies'))?udata. hobbies :'No hobbies Yet'

uname.value=udata.userName
phnum.value=udata.phone
hobby.value=udata.hobbies

discription.value=udata.decr
uemail.value=udata.userEmail
if(udata.hasOwnProperty('picurl')){
    profilepic.src=udata.picurl
    profpic.value=udata.picurl
}


}


// ye like and comment wala code he is ko baad me dekhonga

// function z(){
// const perLike=()=>{
//     let mypost=showPost

//    let tagdi= mypost.postDetail.filter((e)=>{

//       return e.like.find((f)=>{
//         return f==userId
//       })

//     })
//     return tagdi

// }
// console.log(perLike)
// return 

// // console.log(perLike())

// let likedData= perLike().map((e)=>{
//     return e.Id
// })
// console.log(likedData)

//  likedData.forEach((e)=>{
//      let liked=document.getElementById(e)
//       liked.style.color='blue'
//  })
// }


// const likeHandler=(id)=>{
    
    
//     let like=document.getElementById(id)
//     let mypost=showPost
   
//      let posten=mypost.postDetail.find((data)=>{
//         return data.Id==id

//      });
     
// console.log(posten)
// if (!posten.like) {


//     posten.like.push(userId)
//     // localStorage.setItem('posts',JSON.stringify(mypost))
   
//     console.log(posten.like)
// }
// else{
//     let likePost=(posten.like).find((e)=>{
//         return e==userId
//      })

// if(!likePost){
//    posten.like.push(userId)
// localStorage.setItem('posts',JSON.stringify(mypost))
// like.style.color='black'
// console.log(posten.like)


    

// }

// else{


    
//     posten.like.splice(posten.like.indexOf(likePost),1)
//     localStorage.setItem('posts',JSON.stringify(mypost))
//     console.log(posten.like)

// }}
// z()
// displayHandler()
// }

// let commentId=document.querySelector('#comentsubmit')
// let message_text=document.querySelector('#message-text')
// const commentHandler=(cId)=>{
//     commentId.setAttribute('onclick',`commentAddHandler(${cId})`)

// }
// const commentAddHandler=(id)=>{
// let mypost=JSON.parse(localStorage.getItem('posts')) ||[]
// let comPost=mypost.find((e)=>{
//     return e.Id==id
// })

// comPost.comment.unshift({
//     cPic:(picurl==' ')?'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=': picurl,
//     cName:userName,
//     cComment:message_text.value
// })

// localStorage.setItem('posts',JSON.stringify(mypost))

// message_text.value=''
// displayHandler()

// }

// const showless=(id)=>{
//     document.getElementById(id+1).style.display='none'
//     document.getElementById(id-1).setAttribute('onclick',`commentShow(${id})`)
//     document.getElementById(id-1).innerText='See comments'

// }


// const commentShow=(id)=>{
//     comdisplay=document.getElementById(id-1)    

    
//     let mypost=JSON.parse(localStorage.getItem('posts')) ||[]

//     let comPost=mypost.find((e)=>{
//         return e.Id==id
//     })
//     if(comPost.comment.length>0){
//         comdisplay.setAttribute('onclick',`showless(${id})`)
//     comdisplay.innerText='Show less'
//         let commentdata=document.getElementById(id+1)
//         commentdata.style.display='block'
//         console.log(id)
//         console.log(commentdata)
//         commentdata.style.borderTop='1px solid black'
//         commentdata.innerHTML=``
//     comPost.comment.forEach((f)=>{
//     //    console.log( f.cPic)
//     //    console.log( f.cName)
//     //     console.log(f.cComment)

//     let commenthtml=`<div style='display:flex;'><span>
//     <img src="${f.cPic}" style="width:20px; height:20px; border-radius:100px;"></span>
//     <h6>${f.cName}<h6></div>

//     <p>${f.cComment}</p>
    
//     `
//         commentdata.innerHTML+=commenthtml
//     })}
//     else{
//         console.log('no data')
//     }
// }
//kam ka hai ye :::











// const userShow=()=>{
//     postArea.innerHTML=''

//    let dataHtml=`  <table>
//     <tr>
//         <td>Row 1, Column 1</td>
//         <td>Row 1, Column 2</td>
//     </tr>
//     <tr>
//         <td>Row 2, Column 1</td>
//         <td>Row 2, Column 2</td>
//     </tr>
// </table>`
// userUi.innerHTML=dataHtml


// }





// function photoEditSend(u){
//     getPhoto()
//     let mypost=JSON.parse(localStorage.getItem('posts'))
//     let editValue= mypost.find((e)=>{
//         if(e.Id==u)
        
//         return true
//     })
//     editValue.imageurl=photUrl
   
//     photobtn.setAttribute('onclick','getPhoto()')
//     photUrl=''
// }

// let updatepost;
// const editHanlder=(uId)=>{
//     let mypost=JSON.parse(localStorage.getItem('posts'))
//     console.log('edit >>',uId)
//    let editPost= mypost.find((elem)=>{
//         if(uId==elem.Id){
//             return true
//         }
//     })
//     updatepost=editPost
   
//     postText.value=editPost.text
//     submitbtn.textContent="Edit"
//     // editPost.text=postText.value
//     // console.log(editPost)
   
//     console.log(mypost)
//     // displayHandler()
    
//     // console.log(editPost)
//     submitbtn.setAttribute('onclick',`editedSend(${uId})`)
//     photobtn.setAttribute('onclick','photoEditSend()')

   
   


// }
// // function editedSend(uId){
// //     let mypost=JSON.parse(localStorage.getItem('posts'))
// //     console.log('edit >>',uId)
// //    let editPost= mypost.find((elem)=>{
// //         if(uId==elem.Id){
// //             return true
// //         }
// //     })




// //         // displayHandler()

// //     updatepost.text=postText.value
    
// //     submitbtn.textContent="Submit"
// //     localStorage.setItem('posts',JSON.stringify(mypost))
// //     submitbtn.setAttribute('onclick','submitHandler()')
// //     postText.value=''
// //     console.log(updatepost)

// //     displayHandler()
// // }
// function photoEditSend(u){
//     getPhoto()
//     updatepost.imageurl=photUrl;
//     photobtn.setAttribute('onclick','getPhoto()')
//     photUrl=''
    
// }
