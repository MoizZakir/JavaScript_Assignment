import { addDoc, collection,auth, db, getDocs,doc,updateDoc,deleteDoc,signOut,onAuthStateChanged} from "../firebaseconfig.js";

let taskinput=document.getElementById('taskinput')
let addbtn=document.getElementById('addbtn')
let moiz=document.getElementById('moiz')
let Logout=document.getElementById('Logout')
let userId;

onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const uid =  user.uid;
    userId=  user.uid

    
    // ...
  } else {
      window.location='../login/index.html'
    // User is signed out
    // ...
  }
});




window.addDataHandler= async ()=>{
  
  readDat()

    try {

      
      
        const docRef = await addDoc(collection(db, "Todos"), {
            task:taskinput.value,
            time:new Date().toLocaleDateString(),
            userid:userId
        });
        console.log("Document written with ID: ", docRef.id);
        console.log(`tak Add Hogia`)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      taskinput.value=``
      
}


async function readDat(){
  moiz.innerHTML=``
  
  const querySnapshot = await getDocs(collection(db, "Todos"));
  console.log(userId)
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  moiz.innerHTML+=`<div style='margin:20px 0px;'><li class=${doc.id}>${doc.data().task} </li>${(doc.data().userid!=userId)?'':`<span><button id='edit' onclick='editHandler("${doc.id}")'>Edit</button><button id=delete onclick='deleteHandler("${doc.id}")'>Delete</button></span></div>`} `
})
}
readDat()

// addbtn.addEventListener('click',addDataHandler)

window.editHandler=(myid)=>{
  // console.log(myid)
  let elem=document.getElementsByClassName(myid)
  console.log(elem[0])
  // console.log(id.textContent)
  // console.log(elem)
  taskinput.value=elem[0].textContent
  addbtn.textContent=`Edit..`
  addbtn.setAttribute('onclick',`taskedit("${myid}")`)

}
window.taskedit=async (nid)=>{
  const washingtonRef = doc(db, "Todos", nid);

// Set the "capital" field of the city 'DC'

try{
await updateDoc(washingtonRef, {
  task: taskinput.value
});}
catch(e){
  console.log(e)
  
}
addbtn.textContent=`Add`
taskinput.value=``
readDat()
addbtn.setAttribute('onclick',`addDataHandler()`)

}

window.deleteHandler=async (id)=>{
  await deleteDoc(doc(db, "Todos", id));
  readDat()
}



const logoutHandler=()=>{


  signOut(auth).then(() => {
    window.location='../login/index.html'
  }).catch((error) => {
    alert(error)
  });
  
}
Logout.addEventListener('click',logoutHandler)