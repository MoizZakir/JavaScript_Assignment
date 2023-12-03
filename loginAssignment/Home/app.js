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

// // let loggedData=JSON.parse(localStorage.getItem('loggedd user '))
// // loggedData.userName='faizan'

// // console.log(loggedData)
//  localStorage.setItem('loggedd user ', JSON.stringify(loggedData))

userUi=document.getElementById('users')


let postText=document.querySelector('#posttext')
let photobtn=document.querySelector("#photobtn")
let photUrl ;
function getPhoto(){
   
    photUrl=prompt('Enter Picture Link')
    
}

let mypost=JSON.parse(localStorage.getItem('posts')) || []
// console.log(mypost)

function submitHandler(){
    console.log('moiz')
    userUi.innerHTML=''
    let postObj;
    if(photUrl){
        postObj={
            text:postText.value,
            imageurl:photUrl,
            username:JSON.parse(localStorage.getItem('loggedd user ')).userName,
            useremail:JSON.parse(localStorage.getItem('loggedd user ')).userEmail
            }
       
    }

    else if (photUrl===false  || postText.value!==''){
        postObj={
            text:postText.value,
            username:JSON.parse(localStorage.getItem('loggedd user ')).userName,
            useremail:JSON.parse(localStorage.getItem('loggedd user ')).userEmail
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
    userUi.innerHTML=''
    postArea.innerHTML=''

    mypost.forEach((data)=>{
        postHtml=` <div id='mycard' class="card my-3" style="width: 18rem;">
    <img src="${data.imageurl}" width=100px height:100px class="card-img-top" alt="">
    <div class="card-body">
  <h5 class="card-title">${data.username}</h5>
  <p class="card-text">${data.text}</p>
 
    </div>

    </div>`
    postArea.innerHTML+=postHtml

    })
    
    



}
displayHandler()


const userPost = ()=>{
    userUi.innerHTML=''
    postArea.innerHTML=''
    mypost.filter((data)=>{
        if(data.useremail==JSON.parse(localStorage.getItem('loggedd user ')).userEmail) return true 

    }).forEach((e)=>{

      

      
            postHtml=` <div id='mycard' class="card" style="width: 18rem;">
        <img src="${e.imageurl}" width=100px height:100px class="card-img-top" alt="...">
        <div class="card-body">
      <h5 class="card-title">${e.username}</h5>
      <p class="card-text">${e.text}}</p>
     
        </div>
    
        </div>`
        postArea.innerHTML+=postHtml
    
        
        

    })
    
    
    

}

const userShow=()=>{
    postArea.innerHTML=''

   let dataHtml=`  <table>
    <tr>
        <td>Row 1, Column 1</td>
        <td>Row 1, Column 2</td>
    </tr>
    <tr>
        <td>Row 2, Column 1</td>
        <td>Row 2, Column 2</td>
    </tr>
</table>`
userUi.innerHTML=dataHtml


}
