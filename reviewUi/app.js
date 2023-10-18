let data=[{pic:'./download (1).jfif',
myName:'Jack',
position:'FrontendDeveloper',
descrip:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium nostrum, nesciunt impedit iste corporis numquam, praesentium iusto harum itaque nam quis? Possimus quia laboriosam inventore doloremque? Quae, quaerat numquam?',},


{pic:'./download (2).jfif',
myName:'Kim',
position:'BackendDeveloper',
descrip:'A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, vvfjvhvfdv.vvfdv,vgjuhf',},
{pic:'./download (3).jfif',
myName:'silli',
position:'SoftwareEngineer',
descrip:'to ten sentences long. It has a topic sentence and supporting sentences that all relate closely to the topic sentence. The paragraph form refers to its overall structure, which is a group of sentences focusing on a single topic',},
{pic:'./download.jfif',
myName:'harry',
position:'DEvops Engineer',
descrip:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium nostrum, nesciunt impedit iste corporis numquam, praesentium iusto harum itaque nam quis? Possimus quia laboriosam inventore doloremque? Quae, quaerat numquam?',}]

let myPic=document.querySelector("img");
let yourName=document.querySelector('h3');
let designation =document.querySelector('h6');
let description=document.querySelector("p");


let count=0
function add(){
    if (count<(data.length-1)){
        count++
        myPic.src=data[count].pic
        yourName.innerText=data[count].myName
        designation.innerText=data[count].position
        description.innerText=data[count].descrip
    }
   

}
function sub(){
        if(count>0){
        count--
        myPic.src=data[count].pic
        yourName.innerText=data[count].myName
        designation.innerText=data[count].position
        description.innerText=data[count].descrip
    
        }

}