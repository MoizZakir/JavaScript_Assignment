let count=1;
let sideBar=document.querySelector('.sidebar')
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