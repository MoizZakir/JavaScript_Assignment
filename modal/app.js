let main1=document.querySelector('.main')
let button1=document.querySelector('#btn1')
let modal=document.querySelector('.modal')

main1.style.backgroundColor='rgb(84, 84, 80);'
function displayHandler(){
    modal.classList.add('visibleflex')
    modal.classList.remove('hidden')
    button1.classList.add('hidden')
  
}