let count=1;
let veiwname=document.getElementById('viewname')
let sideBar=document.querySelector('.sidebar')
let uemail=document.getElementById('uemail')
let Updatediv=document.getElementById('Updatediv')
let uname=document.getElementById('uname')
let upassword=document.getElementById('upassword')
let sidebar=document.querySelector('.sidebar')
let brandname=document.querySelector(".mybrand " )
let postStart=document.querySelector('#postStart')
let myprof=document.querySelector('#myprof');
let phnum=document.querySelector('#phnum')
let hobby=document.querySelector('#hobby')
let profpic=document.querySelector('#profpic')
let discription=document.querySelector('#discription')
let {userName,userEmail,picurl,decr,hobbies,phone}=JSON.parse(localStorage.getItem('loggedd user '))
brandname.textContent=`Welcome ${userName[0].toUpperCase()+userName.slice(1)}`   

if(!(JSON.parse(localStorage.getItem('loggedd user ')))){
    window.location='../Login/index.html'
    }
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
let loggedData=JSON.parse(localStorage.getItem('loggedd user '))
function logoutHandler(){
    localStorage.removeItem('loggedd user ')
    window.location='../Login/index.html'
}



// function modalHandler(){
//     document.body.style.backgroundColor='grey'
//     Updatediv.style.display='flex'
//     myprof.style.display='none'
//     // sideBar.classList.remove('againtransform')
//     count++
    
    
// }

 let data=JSON.parse(localStorage.getItem('user'))

 uname.value=userName
 uemail.value=userEmail
 phnum.value=phone ||" "
 hobby.value=hobbies || " "
 profpic.value=picurl || " "
 discription.value=decr || " "


 function updateHandler(){
    //  document.body.style.background='none'
    //  myprof.style.display='flex'
    
let forData=data.find((curr)=>{
    if(curr.userid==loggedData.userid)
    return true
})
console.log(forData)

if(uemail.value==loggedData.userEmail){
    forData.userName=uname.value
    forData.userEmail=uemail.value
    forData.phone=phnum.value
    forData.hobbies=hobby.value
    forData.picurl=profpic.value
    forData.decr=discription.value
    loggedData.userName=uname.value
loggedData.userEmail=uemail.value
loggedData.picurl=profpic.value
loggedData.decr=discription.value
loggedData.hobbies=hobby.value
loggedData.phone=phnum.value
    Updatediv.style.display='none'
    localStorage.setItem('user',JSON.stringify(data))
    localStorage.setItem('loggedd user ',JSON.stringify(loggedData))
    return alert('update succefully hai')
}
else{
    let minedata=data.filter((e)=>{
        if(e.userEmail!=forData.userEmail){
        return true}
    }).find((f)=>{
        if(uemail.value==f.userEmail){
            Updatediv.style.display='none'
            return true
        }

    
    
    })
    if(!minedata){
               
        forData.userName=uname.value
        forData.userEmail=uemail.value
        forData.phone=phnum.value
        forData.hobbies=hobby.value
        forData.picurl=profpic.value
        forData.decr=discription.value
        loggedData.userName=uname.value
        loggedData.userEmail=uemail.value
        loggedData.picurl=profpic.value
        loggedData.decr=discription.value
        loggedData.hobbies=hobby.value
        loggedData.phone=phnum.value
        Updatediv.style.display='none'
        localStorage.setItem('loggedd user ',JSON.stringify(loggedData))
        localStorage.setItem('user',JSON.stringify(data))
        
        return  alert('Update Succefully chal')

    }
    else{
        Updatediv.style.display='none'
        return alert('Email Already Taken')
    }
   
}

    // let userdata=data.find((mydata)=>{
    //     if (mydata.userid==loggedData.userid){
    //         if(uemail.value==loggedData)
    //         mydata.userName=uname.value
    //         mydata.userEmail=uemail.value
    //         mydata.phone=phnum.value
    //         mydata.hobbies=hobby.value
    //         mydata.picurl=profpic.value
    //        mydata.decr =discription.value
        //    loggedData.userName=uname.value
        //     loggedData.userEmail=uemail.value
        //    loggedData.picurl=profpic.value
        //    loggedData.decr=discription.value
        //    loggedData.hobbies=hobby.value
        //     loggedData.phone=phnum.value
        //   localStorage.setItem('user',JSON.stringify(data))

           
            

        // }
        
        

    
    
        // })
        // alert('update Succesfully ')
        // console.log(userdata)
        localStorage.setItem('user',JSON.stringify(data))
        // localStorage.setItem('loggedd user ',JSON.stringify(loggedData))
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
function getPhoto(){
   
    photUrl=prompt('Enter Picture Link')
    
}

let mypost=JSON.parse(localStorage.getItem('posts')) || []


function submitHandler(){
    let mypost=JSON.parse(localStorage.getItem('posts')) || []
    console.log('moiz')
    userUi.innerHTML=''
    let postObj;
    if(photUrl){
        postObj={
            text:postText.value,
            imageurl:photUrl,
            username:JSON.parse(localStorage.getItem('loggedd user ')).userName,
            useremail:JSON.parse(localStorage.getItem('loggedd user ')).userEmail,
            Id: Date.now(),
            like:[]
            }
       
    }

    else if (photUrl===false  || postText.value!==''){
        postObj={
            text:postText.value,
            imageurl:'',
            username:JSON.parse(localStorage.getItem('loggedd user ')).userName,
            useremail:JSON.parse(localStorage.getItem('loggedd user ')).userEmail,
            Id: Date.now(),
            like:[]
            }
    
       
          
            
    }
    else return alert('Please Post Something')
    photUrl=''
    postText.value=''
    mypost.unshift(postObj)
    localStorage.setItem('posts',JSON.stringify(mypost))
    displayHandler()

  
  
}

///
let postArea=document.querySelector("#postArea")
let postHtml;
function displayHandler(){
    postStart.style.display='flex'
    myprof.style.display='none'
    
    
    
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]
    console.log(mypost)
    userUi.innerHTML=''
    postArea.innerHTML=''

    mypost.forEach((data)=>{
        postHtml=` <div id='mycard' class="card my-3" style="width: 20rem; margin-bottom:50px">
    
    <div class="card-body">
    <h5 class="card-title">${data.username}</h5>
    ${JSON.parse(localStorage.getItem('loggedd user ')).userEmail==data.useremail ? `<div style='padding:5px 0 ;display:flex;justify-content:space-between;'><button class='modifybtn' style='background:none; border:none; ' onclick=editHandler(${data.Id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"  fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHanlder(${data.Id})><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i></button></div>`:``}
    
 
  <p class="card-text">${data.text}</p>

    </div>
    ${(data.imageurl)? `<img src="${data.imageurl}" width=100rem height:200px class="card-img-top" alt="...">`:''}
    <div style='display:flex; justify-content:space-between;'><p> 
    
    
    <svg xmlns="http://www.w3.org/2000/svg" id=${data.Id} style='margin:0px 5px; cursor:pointer;' onclick=likeHandler(${data.Id}) width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
    <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
  </svg>
  ${data.like.length} Like</p>
    <p><svg style='margin:0px 5px;' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
  </svg>Commment</p>
    </div>

    </div>`
    postArea.innerHTML+=postHtml

    })
    
    
z()
    

}
displayHandler()





let editItem;
const editHandler=(uId)=>{
    console.log('moiz')
    let mypost=JSON.parse(localStorage.getItem('posts'))
   let editValue= mypost.find((e)=>{
        if(e.Id==uId)
        uninqueId=uId
        return true
    })
    document.getElementById('del').disabled=true
    postText.value=editValue.text
    editItem=editValue
    submitbtn.setAttribute('onclick',`editPostHandler(${uId})`)
 
    submitbtn.textContent='Edit..'

    
}
const editPostHandler=(u)=>{
    console.log(u)
   
    let mypost=JSON.parse(localStorage.getItem('posts'))
    let editValue= mypost.find((e)=>{
        if(e.Id==u)
        
        return true
    })
    editValue.text=postText.value
    if(photUrl!=''){
        editValue.imageurl=photUrl
    }
    photUrl=''
    localStorage.setItem('posts',JSON.stringify(mypost))
    submitbtn.setAttribute('onclick','submitHandler()')
    submitbtn.textContent='Submit'
    postText.value=''
    document.getElementById('del').disabled=false

console.log(mypost)
displayHandler()
}




const deleteHanlder=(uId)=>{
    let mypost=JSON.parse(localStorage.getItem('posts'))
    console.log('delete >>',uId)
    let deleteElem=mypost.filter((e)=>{
        if(e.Id!=uId) return true
    })
    localStorage.setItem('posts',JSON.stringify(deleteElem))
    displayHandler()
}


const userPost = ()=>{

   
    postStart.style.display='flex'
    myprof.style.display='none'
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]
    

    userUi.innerHTML=''
    postArea.innerHTML=''
    mypost.filter((data)=>{
        if(data.useremail==JSON.parse(localStorage.getItem('loggedd user ')).userEmail) return true 

    }).forEach((e)=>{

      

      
            postHtml=` <div id='mycard' class="card" style="width: 20rem; margin-bottom:50px">
        
        <div class="card-body">
        
        
        <div style='display:flex;justify-content:space-between; padding:1px 0px ;'>
        <p class="card-title" style='display:flex;'><img src="${(picurl!='') ? picurl:"https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}" style='border-radius:50%; width:50px; height:50px; margin-top:-15px'>${e.username}</p>
        <div class="dropdown">
        <button class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style=background:none>
          
        </button>
        <ul class="dropdown-menu">
       <li style=' margin:10px 5px;'> <button class='modifybtn' style='background:none; border:none; ' onclick=editHandler(${e.Id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
      </svg>Edit</button></li>
      <li style=' margin:10px 5px;'><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHanlder(${e.Id})><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i> Delete</button> </li>
        </ul>
      </div>
      
    </div>
        
     
      <h6 class="card-text">${e.text}</h6>
      
     
        </div style='width:100%;'>
        ${(e.imageurl)? `<img src="${e.imageurl}" style='width:100%'  height:200px class="card-img-top" alt="...">`:''}

        <div style='display:flex; justify-content:space-between;'><p>
        
        <svg xmlns="http://www.w3.org/2000/svg" id=${e.Id} style='margin:0px 5px; cursor:pointer;' onclick=likeHandler(${e.Id}) width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
</svg>
        
${e.like.length}  Like</p>
        <p><svg  style='margin:0px 5px;' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
      </svg>Commment</p>
        </div>    
     </div>
        
       
        
        `
        
        postArea.innerHTML+=postHtml
    
        
        
        

    })
    z()
    
    

}

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
function Myprofile(){
   
   
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

profilename.innerText=userName
profiledescription.innerText=(decr !=' ')? decr : 'no description yet'
profileemail.innerText=userEmail
profilphone.innerText=(phone !=' ')?phone :'No phone Number'
profilhobbies.innerText=(hobbies !=' ' )? hobbies :'No hobbies Yet'
if(picurl!=' '){
    profilepic.src=picurl
}


}


function upgradeInfoHandler(){







}

function z(){
const perLike=()=>{
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]

   let tagdi= mypost.filter((e)=>{

      return e.like.find((f)=>{
        return f==userEmail
      })

    })
    return tagdi

}

// console.log(perLike())

let likedData= perLike().map((e)=>{
    return e.Id
})
console.log(likedData)

 likedData.forEach((e)=>{
     let liked=document.getElementById(e)
      liked.style.color='blue'
 })
}


const likeHandler=(id)=>{
    
    
    let like=document.getElementById(id)
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]
   
     let posten=mypost.find((data)=>{
        return data.Id==id

     });
     
console.log(posten)
if (!posten.like) {


    posten.like.push(userEmail)
    localStorage.setItem('posts',JSON.stringify(mypost))
   
    console.log(posten.like)
}
else{
    let likePost=(posten.like).find((e)=>{
        return e==userEmail
     })

if(!likePost){
   posten.like.push(userEmail)
localStorage.setItem('posts',JSON.stringify(mypost))
like.style.color='black'
console.log(posten.like)


    

}

else{


    
    posten.like.splice(posten.like.indexOf(likePost),1)
    localStorage.setItem('posts',JSON.stringify(mypost))
    console.log(posten.like)

}}
z()
}



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
