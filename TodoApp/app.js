let btn=document.getElementById('addbtn')
let unList=document.querySelector('ul')
let textField=document.querySelector('input')
let myItems=document.querySelector('.items')
let num=0

function editHandler(editVal){
    let li=document.getElementById(editVal)
    console.log(li.children[0].textContent)
    textField.value=li.children[0].textContent
    
    btn.setAttribute('onclick',`newEdithandler('${editVal}')`)
    btn.textContent='Edit';
    
}

function newEdithandler(newVal){
    let li=document.getElementById(newVal)
    li.children[0].innerHTML=textField.value
    li.setAttribute('id',`${newVal}`)
    btn.setAttribute('onclick',`addHandler()`)
    btn.textContent='ADD'
    textField.value=''


}
function deleteHandler(getvalue){
    console.log('delete')
    console.log(getvalue)
   let myLi =document.getElementById(getvalue);
    unList.removeChild(myLi)
    btn.setAttribute('onclick',`addHandler()`)
    btn.textContent='ADD'
  
}
function addHandler(){
if (textField.value==''){
    alert(`please Add Task`)
    
}
else{
    let myValue=textField.value

   
    unList.innerHTML+=`<li id= ${num} class="myList">
    <h3>${myValue}</h3>
    <div class="indiv">
    <button onclick="editHandler('${num}')">Edit</button>
    <button class='myDel' onclick="deleteHandler('${num}')">Delete</button>
    </div></li>`
    

textField.value=''
num++


}}

