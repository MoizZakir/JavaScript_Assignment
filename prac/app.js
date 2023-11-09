var counting=0
var counting2=0
var counting3=0
let head=document.createElement('h1')
let head2=document.createElement('h1')
let head3=document.createElement('h1')
let para=document.createElement('p')


let checkCheating=true



function hello(){
setInterval(function moiz(){
    counting++
    if(counting===10){
        counting=0
        ++counting2
        // console.log(count2)
       
        
    }
    if(counting2===60){
        counting2=0
        ++counting3

    }
    if(counting2===10){
            
        para.innerText='you losse'
        document.body.appendChild(para)
    }
    head.innerText=+counting
    head2.innerText=+counting2
    head3.innerText=+counting3
    
    },100)


}
let isFailed=true

hello()




document.body.appendChild(head)
document.body.appendChild(head2)
document.body.appendChild(head3)


