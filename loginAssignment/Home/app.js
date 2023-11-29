let count=1;
let veiwname=document.getElementById('viewname')
let sideBar=document.querySelector('.sidebar')
let uemail=document.getElementById('uemail')
let Updatediv=document.getElementById('Updatediv')
let uname=document.getElementById('uname')
let upassword=document.getElementById('upassword')
let sidebar=document.querySelector('.sidebar')
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
veiwname.textContent=loggedData.userName
uname.value=loggedData.userName
uemail.value=loggedData.userEmail
upassword.value=loggedData.userPassword
function modalHandler(){
    document.body.style.backgroundColor='grey'
    Updatediv.style.display='flex'
    sideBar.classList.remove('againtransform')
    count++
    
}

 let data=JSON.parse(localStorage.getItem('user'))
 console.log(data)
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

