let count=1;
let veiwname=document.getElementById('viewname')
let sideBar=document.querySelector('.sidebar')
let uemail=document.getElementById('uemail')
let Updatediv=document.getElementById('Updatediv')
let uname=document.getElementById('uname')
let upassword=document.getElementById('upassword')
let sidebar=document.querySelector('.sidebar')
let brandname=document.querySelector('#brandname')

// brandname.textContent=`${JSON.parse(localStorage.getItem('loggedd user ')).userName}`
if(!(JSON.parse(localStorage.getItem('loggedd user ')))){
    window.location='../Login/index.html'
    }
function clickHandler(){
    ++count
    if(count%2==0){
        sideBar.classList.add('againtransform')
        // sideBar.classList.remove('tranform')
    }
    else{
        // sideBar.classList.add('transform')
        sideBar.classList.remove('againtransform')

    }
    console.log(count)
}
let loggedData=JSON.parse(localStorage.getItem('loggedd user '))
function logoutHandler(){
    localStorage.removeItem('loggedd user ')
    window.location='../Login/index.html'
}
// veiwname.textContent=loggedData.userName
uname.value=loggedData.userName
uemail.value=loggedData.userEmail
upassword.value=loggedData.userPassword
function modalHandler(){
    document.body.style.backgroundColor='grey'
    Updatediv.style.display='flex'
    sideBar.classList.remove('againtransform')
    count++
    
}
// brandname.innerText=(loggedData.userName)
 let data=JSON.parse(localStorage.getItem('user'))
//  console.log(data)
function updateHandler(){
    document.body.style.background='none'
    


    let userdata=data.forEach((mydata)=>{
        if (mydata.userEmail==loggedData.userEmail){
            mydata.userName=uname.value
            mydata.userEmail=uemail.value
            mydata.userPassword=upassword.value
            mydata.userConfirmPassword=upassword.value
            //  localStorage.setItem('user',JSON.stringify(data))

            alert('update Succesfully ')
            

        }
        Updatediv.style.display='none'

    
    
        })
        // console.log(userdata)
        localStorage.setItem('user',JSON.stringify(data))
    }
    
    
function modalClose(){
    Updatediv.style.display='none'
    document.body.style.background='none'
}



userUi=document.getElementById('users')


let postText=document.querySelector('#posttext')
let photobtn=document.querySelector("#photobtn")
let submitbtn=document.querySelector("#submitbtn")
let photUrl ;
function getPhoto(){
   
    photUrl=prompt('Enter Picture Link')
    
}

let mypost=JSON.parse(localStorage.getItem('posts')) || []
// console.log(mypost)

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
            Id: Date.now()
            }
       
    }

    else if (photUrl===false  || postText.value!==''){
        postObj={
            text:postText.value,
            imageurl:'',
            username:JSON.parse(localStorage.getItem('loggedd user ')).userName,
            useremail:JSON.parse(localStorage.getItem('loggedd user ')).userEmail,
            Id: Date.now()
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
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]
    console.log(mypost)
    userUi.innerHTML=''
    postArea.innerHTML=''

    mypost.forEach((data)=>{
        postHtml=` <div id='mycard' class="card my-3" style="width: 18rem;">
    <img src="${data.imageurl}" width=100px height:100px class="card-img-top" alt="">
    <div class="card-body">
    ${JSON.parse(localStorage.getItem('loggedd user ')).userEmail==data.useremail ? `<div style='padding:10px 0 ;display:flex;justify-content:space-between;'><button class='modifybtn' style='background:none; border:none; ' onclick=editHandler(${data.Id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"  fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHanlder(${data.Id})><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i></button></div>`:``}
    
  <h5 class="card-title">${data.username}</h5>
  <p class="card-text">${data.text}</p>
 
    </div>

    </div>`
    postArea.innerHTML+=postHtml

    })
    
    



}
displayHandler()


const userPost = ()=>{
    let mypost=JSON.parse(localStorage.getItem('posts')) ||[]

    userUi.innerHTML=''
    postArea.innerHTML=''
    mypost.filter((data)=>{
        if(data.useremail==JSON.parse(localStorage.getItem('loggedd user ')).userEmail) return true 

    }).forEach((e)=>{

      

      
            postHtml=` <div id='mycard' class="card" style="width: 18rem;">
        <img src="${e.imageurl}" width=100px height:100px class="card-img-top" alt="...">
        <div class="card-body">
        <div style='display:flex;justify-content:space-between; padding:10px 0px ;'>
    <button class='modifybtn' style='background:none; border:none; ' onclick=editHanlder(${e.Id})><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button><button class='modifybtn' id='del' style='background:none; border:none; ' onclick=deleteHandler(${e.Id})><i class="fa fa-trash"  style='font-size:1.4rem;' aria-hidden="true"></i></button></div>
        
      <h5 class="card-title">${e.username}</h5>
      <p class="card-text">${e.text}</p>
     
        </div>
    
        </div>`
        postArea.innerHTML+=postHtml
    
        
        

    })
    
    
    

}

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

let editItem;
const editHandler=(uId)=>{
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



function photoEditSend(u){
    getPhoto()
    let mypost=JSON.parse(localStorage.getItem('posts'))
    let editValue= mypost.find((e)=>{
        if(e.Id==u)
        
        return true
    })
    editValue.imageurl=photUrl
   
    photobtn.setAttribute('onclick','getPhoto()')
    photUrl=''
}

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
const deleteHanlder=(uId)=>{
    let mypost=JSON.parse(localStorage.getItem('posts'))
    console.log('delete >>',uId)
    let deleteElem=mypost.filter((e)=>{
        if(e.Id!=uId) return true
    })
    localStorage.setItem('posts',JSON.stringify(deleteElem))
    displayHandler()
}