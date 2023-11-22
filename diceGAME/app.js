let player1=prompt('Player1')
let player2=prompt('Player2')
if (player1=='' && player2==''){
    alert('Please Enter Name')
}
else{
let playerTurn=true
let portion1=document.querySelector('.firstportion')
let portion2=document.querySelector('.secondportion')
let currentScore1=document.querySelector('#currentScore1')

let curr1=document.getElementById('currentScore1');
let curr2=document.getElementById('currentScore2');
let holdbtn=document.getElementById('holdbtn')
let name1=document.getElementById('name1')
let name2=document.getElementById('name2')
let dicimages=document.getElementById('dicimage')
let totalscr1=document.getElementById('totalscr')
let totalscr2=document.getElementById('totalscr2')
dicimages.src="/assests/dic1.png"
name1.innerText=player1
name2.innerText=player2
portion1.style.backgroundColor='rgb(173, 87, 116)'
let currscore1=0;
let currscore2=0;
let totalscore1=0;
let totalscore2=0;

let rollDice=document.getElementById('rolldice')

function roll(){
    let numberOfDice=Math.ceil(Math.random()*6)  
if(playerTurn){
    portion1.style.backgroundColor='rgb(173, 87, 116)'
    portion2.style.backgroundColor='rgb(210, 163, 171)'
    dicimages.src=`./assests/dic${numberOfDice}.png`
   if(numberOfDice==1){
    playerTurn=false;
    currscore1=0
    currentScore1.innerText=currscore1
    portion1.style.backgroundColor='rgb(210, 163, 171)'
    portion2.style.backgroundColor='rgb(173, 87, 116)'
    
   }
   else{
    portion1.style.backgroundColor='rgb(173, 87, 116)'
    currscore1+=numberOfDice;
    currentScore1.innerText=currscore1
    console.log(currentScore1)}
    

}
else{
    let numberOfDice2=Math.ceil(Math.random()*6)
    dicimages.src=`./assests/dic${numberOfDice2}.png`
    portion1.style.backgroundColor='rgb(210, 163, 171)'
    if(numberOfDice2==1){
        playerTurn=true
        currscore2=0
        curr2.innerText=currscore2
        portion2.style.backgroundColor='rgb(210, 163, 171)'
        portion1.style.backgroundColor='rgb(173, 87, 116)'
        
    }
    else{

        portion2.style.backgroundColor='rgb(173, 87, 116)'
    currscore2+=numberOfDice2;
    curr2.innerText=currscore2
    console.log(currscore2)}


   
}

    
}

function hold(){
    if(playerTurn){
    totalscore1+=currscore1;
    totalscr1.innerText=totalscore1
    if(totalscore1>=40){
        alert(`${player1}  winn`)
        holdbtn.removeAttribute('onclick')
        rollDice.removeAttribute('onclick')
    }
    currscore1=0
    playerTurn=false;
    }
    else{
        totalscore2+=currscore2;
        totalscr2.innerText=totalscore2
        if(totalscore2>=40){
            alert(`${player2}  winn`)
            holdbtn.removeAttribute('onclick')
            rollDice.removeAttribute('onclick')
        }
        playerTurn=true;
        currscore2=0
    }
    
}

function reset(){
    window.location='./index.html'

//     console.log('hello')
//     totalscore1=0
//     currscore1=0
//     totalscore2=0
//     currscore2=0
//     holdbtn.setAttribute('onclick','hold()')
//     rollDice.setAttribute('onclick','roll()')
//     currentScore1.innerText=currscore1
// curr2.innerText=currscore2
// totalscr1.innerText=totalscore1
// totalscr2.innerText=totalscore2
}}