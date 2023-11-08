let userValue=document.getElementById('uservalue');
let checkBtn=document.getElementById('checks')
let showAnswer=document.getElementById('find')
let Score=20
let para1=document.getElementById('p1')
let para2=document.getElementById('p2')
let para3=document.getElementById('p3')
let randomValue=Math.round((Math.random()*20))
function doHandler(){
   
    if(userValue.value==randomValue){
    console.log(randomValue)
showAnswer.textContent=userValue.value
document.body.style.backgroundColor='green'
para2.innerText=`Score!:${Score}`
para3.innerText=`HighScore!${Score}`
para1.innerText='Matched!'
}

else if(userValue.value>randomValue){
    para1.innerText='Too high'
    
    Score--
    para2.innerText=`Score:${Score}`
    

}
else{
    para1.innerText='Too low'
    Score--
    para2.innerText=`Score:${Score}`

}
    
}
function moiz(){
    window.location('/index.html')
}

console.log(randomValue)