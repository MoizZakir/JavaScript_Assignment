const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Ge"],
      correctAnswer: "Au"
    }
  ];

  let back_home=document.getElementById('backhome')
  back_home.style.display='none'
function backHome(){

  back_home.style.display='none'
  // fistWindow.style.display='flex'
  window.location='/index.html'

}


let fistWindow=document.getElementById("firstwindow")
let count=0
let score=0

function thanks(){
  back_home.style.display='block'
main.style.display='none'
nextBtn.style.display='none'

}
  let main=document.getElementById('main')
  let nextBtn=document.getElementById('next')
  nextBtn.style.display='none'
  function moiz(){
      let myhtml=`<div id="page">
    <h2>Question: <span style="font-weight: 500; font-size: 1.3rem;">${quizQuestions[count].question}</span></h2>
    
    <div style="padding-top: 35px; margin-left: 20px;">
       <div style="display: flex;"><input class="checkbtn" value=${quizQuestions[count].options[0]}  type="checkbox">
       <p>${quizQuestions[count].options[0]} </p></div>
     
    </div>
    <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value=${quizQuestions[count].options[1]} type="checkbox">
        <p>${quizQuestions[count].options[1]} </div>
      
     </div>
     <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value=${quizQuestions[count].options[2]}  type="checkbox">
        <p>${quizQuestions[count].options[2]} </p></div>
      
     </div>
     <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value=${quizQuestions[count].options[3]}  type="checkbox">
        <p>${quizQuestions[count].options[3]} </p></div>
      
     </div>
    </div>`
      
      console.log(count)
      main.innerHTML=myhtml
      
      let checkValues=document.querySelectorAll('.checkbtn')
       checkValues.forEach((checks)=>{
       checks.addEventListener('change',function(){
         let myCount=count-1
        if(quizQuestions[myCount].correctAnswer==this.value){
          score+=10
          console.log(quizQuestions[myCount].correctAnswer==this.value)
          console.log(this.value)
          console.log(quizQuestions[myCount].correctAnswer)
        }
        else{
          score+=0
         console.log( quizQuestions[myCount].correctAnswer==this.value)
         console.log(this.value.trim())
          console.log(quizQuestions[myCount].correctAnswer)
        }
      //   if(this.value==quizQuestions[count].correctAnswer){
      //     console.log(true)
      //   }
      //   else{
      //     console.log(false)}
       })
       })
      if(count==(quizQuestions.length-1)){
        
        nextBtn.setAttribute('onclick','thanks()')
        

      }


      let checkbtn=document.querySelectorAll('.checkbtn')
checkbtn.forEach((some)=>{
    some.addEventListener('change',function(){
        if(this.checked){

            checkbtn.forEach((otherbox)=>{
               
                if(otherbox!== this){
                    otherbox.checked=false
                }
            })
        }
    })
})
count++
}
let username=document.querySelector('#username')
function quizStart(){
  
if(username.value==''){
  alert('please Provide Name')
  
}
else{
username.value=''
  fistWindow.style.display='none'
 
  nextBtn.style.display='block'
  moiz()
}
}
  

  

 






