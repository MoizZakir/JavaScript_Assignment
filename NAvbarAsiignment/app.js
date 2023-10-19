let width=screen.width

let item1=document.querySelector('nav')
let button=document.getElementById('btn')

if(width<=700){
item1.setAttribute('class','hidden')
button.setAttribute('class','visible')
}
console.log(width)