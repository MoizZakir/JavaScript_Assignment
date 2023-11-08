const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High Tech Multi-Language", "Hyper Transfer Markup Language"],
    correctAnswer: "Hypertext Markup Language",
    type: "Python",
  },
      {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High Tech Multi-Language", "Hyper Transfer Markup Language"],
        correctAnswer: "Hypertext Markup Language",
        type: "HTML",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: "<a>",
        type: "HTML",
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<linebreak>", "<break>", "<br>"],
        correctAnswer: "<br>",
        type: "HTML",
      },
      {
        question: "Which HTML tag is used for creating an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<list>"],
        correctAnswer: "<ol>",
        type: "HTML",
      },
      {
        question: "What does HTML use to define the structure of a web page?",
        options: ["CSS", "JavaScript", "DOM", "Tags"],
        correctAnswer: "Tags",
        type: "HTML",
      },
      {
        question: "Which HTML tag is used to define an image?",
        options: ["<img>", "<picture>", "<image>", "<photo>"],
        correctAnswer: "<img>",
        type: "HTML",
      },
      {
        question: "What is the purpose of the HTML <meta> tag?",
        options: ["To define the structure of a web page", "To specify the character encoding for the document", "To create links to other pages", "To style the page layout"],
        correctAnswer: "To specify the character encoding for the document",
        type: "HTML",
      },
      {
        question: "What HTML tag is used for creating a table?",
        options: ["<table>", "<grid>", "<tab>", "<data>"],
        correctAnswer: "<table>",
        type: "HTML",
      },
      {
        question: "Which HTML tag is used to define the document's header section?",
        options: ["<head>", "<header>", "<meta>", "<title>"],
        correctAnswer: "<head>",
        type: "HTML",
      },
      {
        question: "In HTML, which tag is used to define an unordered list?",
        options: ["<ul>", "<li>", "<ol>", "<list>"],
        correctAnswer: "<ul>",
        type: "HTML",
      },
      {
        question: "What property is used to change the text color of an element in CSS?",
        options: ["color", "font-color", "text-color", "font-color"],
        correctAnswer: "color",
        type: "CSS",
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: ["line-spacing", "text-spacing", "line-height", "spacing"],
        correctAnswer: "line-height",
        type: "CSS",
      },
      {
        question: "What CSS property is used to set the background color of an element?",
        options: ["background-color", "color", "text-color", "background"],
        correctAnswer: "background-color",
        type: "CSS",
      },
      {
        question: "Which CSS property is used to change the font size of an element?",
        options: ["font-size", "text-size", "size", "font"],
        correctAnswer: "font-size",
        type: "CSS",
      },
      {
        question: "What is the correct way to add multiple background images in CSS?",
        options: ["background-image: url(image1.jpg) url(image2.jpg);", "background-image: [image1.jpg, image2.jpg];", "background-images: url(image1.jpg) url(image2.jpg);", "background-image: url(image1.jpg, image2.jpg);"],
        correctAnswer: "background-image: url(image1.jpg), url(image2.jpg);",
        type: "CSS",
      },
      {
        question: "Which CSS property is used to control the order of elements in a flex container?",
        options: ["order", "flex-order", "flex-item-order", "element-order"],
        correctAnswer: "order",
        type: "CSS",
      },
      {
        question: "What is the CSS property used to add shadows to text?",
        options: ["text-shadow", "shadow-text", "text-effect", "text-outline"],
        correctAnswer: "text-shadow",
        type: "CSS",
      },
      {
        question: "Which CSS property is used to change the style of the cursor in CSS?",
        options: ["cursor-style", "pointer-style", "mouse-style", "cursor"],
        correctAnswer: "cursor",
        type: "CSS",
      },
      {
        question: "In CSS, which property is used to add rounded corners to an element?",
        options: ["border-radius", "rounded-corners", "corner-style", "border-style"],
        correctAnswer: "border-radius",
        type: "CSS",
      },
      {
        question: "What is the CSS property used to specify the stacking order of elements?",
        options: ["stacking-order", "z-index", "layer-index", "order"],
        correctAnswer: "z-index",
        type: "CSS",
      },
      {
        question: "What is the result of 2 + '2' in JavaScript?",
        options: ["4", "22", "TypeError", "NaN"],
        correctAnswer: "22",
        type: "JavaScript",
      },
      {
        question: "What is the purpose of the JavaScript `typeof` operator?",
        options: ["To check if a variable is defined", "To determine the type of a value or variable", "To compare two values for equality", "To create a new variable"],
        correctAnswer: "To determine the type of a value or variable",
        type: "JavaScript",
      },
      {
        question: "How do you declare a variable in JavaScript?",
        options: ["v myVar;", "variable myVar;", "var myVar;", "myVar = variable;"],
        correctAnswer: "var myVar;",
        type: "JavaScript",
      },
      {
        question: "What is the correct way to write a JavaScript comment?",
        options: ["// 'This is a comment'", "<!-- This is a comment -->", "/*' This is a comment' */", "# This is a comment"],
        correctAnswer: "// This is a comment",
        type: "JavaScript",
      },
      {
        question: "What is the result of 10 / 0 in JavaScript?",
        options: ["0", "Infinity", "NaN", "Error"],
        correctAnswer: "Infinity",
        type: "JavaScript",
      },
  ];
let requiredQuestion=[];
let quizTypeOption=document.getElementById('quizType')
let myValues=[]
requiredQuestion.splice(0,requiredQuestion.length)

quizQuestions.forEach((e)=>{
  if(!myValues.includes(e.type)){
    myValues.push(e.type)
  }
})
console.log(myValues)
myValues.forEach((myType)=>{
  let optionValue=`<option value="${myType}">${myType}</option>`
quizTypeOption.innerHTML+=optionValue

})
quizTypeOption.addEventListener('change', function CallHandler() {
  quizQuestions.filter((myData)=>{
    
  if(myData.type.includes(quizTypeOption.value)){
    
    
    
 
        requiredQuestion.push(myData)
        
    
    
  return true
}
else{
  return false
}})



})


  let back_home=document.getElementById('backhome')
  back_home.style.display='none'
function backHome(){

  back_home.style.display='none'
  // fistWindow.style.display='flex'
  window.location='/index.html'

}

let resultMarks=document.getElementById('forResult')
let fistWindow=document.getElementById("firstwindow")
let count=0
let score=0
let marks=((score)*100)

function thanks(){
  resultMarks.innerHTML=`You Got ${marks}%`
  back_home.style.display='block'
main.style.display='none'
nextBtn.style.display='none'

}
  let main=document.getElementById('main')
  let nextBtn=document.getElementById('next')
  nextBtn.style.display='none'
  function moiz(){
    console.log(requiredQuestion)
      let myhtml=`<div id="page">
    <h2>Question: <span style="font-weight: 500; font-size: 1.3rem;">${requiredQuestion[count].question}</span></h2>
    
    <div style="padding-top: 35px; margin-left: 20px;">
       <div style="display: flex;"><input class="checkbtn" value='${requiredQuestion[count].options[0]}'  type="checkbox">
       <p>${requiredQuestion[count].options[0]} </p></div>
     
    </div>
    <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value='${requiredQuestion[count].options[1]}' type="checkbox">
        <p>${requiredQuestion[count].options[1]} </div>
      
     </div>
     <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value='${requiredQuestion[count].options[2]}'  type="checkbox">
        <p>${requiredQuestion[count].options[2]} </p></div>
      
     </div>
     <div style="padding-top: 35px; margin-left: 20px;">
        <div style="display: flex;"><input class="checkbtn" value='${requiredQuestion[count].options[3]}'  type="checkbox">
        <p>${requiredQuestion[count].options[3]} </p></div>
      
     </div>
    </div>`
      
      console.log(count)
      main.innerHTML=myhtml
      
      let checkValues=document.querySelectorAll('.checkbtn')
       checkValues.forEach((checks)=>{
       checks.addEventListener('change',function(){
         let myCount=count-1
        if(requiredQuestion[myCount].correctAnswer==this.value){
          score+=10
          console.log(requiredQuestion[myCount].correctAnswer==this.value)
          console.log(checks.value)
          console.log(requiredQuestion[myCount].correctAnswer)
        }
        else{
          score+=0
         console.log( requiredQuestion[myCount].correctAnswer==this.value)
         console.log(this.value)
          console.log(requiredQuestion[myCount].correctAnswer)
        }
      //   if(this.value==quizQuestions[count].correctAnswer){
      //     console.log(true)
      //   }
      //   else{
      //     console.log(false)}
       })
       })
      if(count==(requiredQuestion.length-1)){
        
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
  

  

 






