let count=0
let count2=0
let count3=0
let head=document.createElement('h1')
let head2=document.createElement('h1')
let head3=document.createElement('h1')
let para=document.createElement('p')
function doing(){
    
setInterval(() => {
    count++
    if(count==60){
        count=0
        count2++
        // console.log(count2)
        if(count2==60){
            count2=0
            count3++

        }
        if(count3==1){
            
            para.innerText='you losse'
            document.body.appendChild(para)
        }
    }
    head.innerText=count
    head2.innerText=count2
    head3.innerText=count3
    
},1)




}
doing()

document.body.appendChild(head)
document.body.appendChild(head2)
document.body.appendChild(head3)


