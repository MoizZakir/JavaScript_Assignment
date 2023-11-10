let player1=prompt('Player1')
let player2=prompt('Player2')
let playerTurn=true
let currentScore=0;
let curr1=document.getElementById('currentScore1');
let curr2=document.getElementById('currentScore2');

let name1=document.getElementById('name1')
let name2=document.getElementById('name2')
let dicimages=document.getElementById('dicimage')
dicimages.src="/assests/dic1.png"
name1.innerText=player1
name2.innerText=player2
let rollDice=document.getElementById('rolldice')
rollDice.addEventListener('click',()=>{
    let numberOfDice=Math.ceil(Math.random()*6)
    dicimages.src=`./assests/dic${numberOfDice}.png`
    if()
    
})