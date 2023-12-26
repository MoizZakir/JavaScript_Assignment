let search=document.querySelector('#search')
let firstPortion =document.getElementById(`firstPortion`)
let SecondPortion=document.getElementById(`SecondPortion`)
// let api=`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search.value}`
let allData;
const moiz= async function(){
    firstPortion.innerHTML=`<div id="load" style="display: flex; justify-content: center;">
    <div></div>

</div>`
try{
    let prom=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search.value}`).then((data)=>{
        return data
    })
    
    // console.log(search.value)
    let data= await prom.json()
    allData= data.data.recipes
    getPromise(data);}
    catch(err){
    //     firstPortion.innerHTML=`<div style="display: flex; justify-content: center; margin-top:50px">
    //     <div><h4>404 error Not found</h4></div>
    
    // </div>`

    }
    
  
    
}



const getPromise=async (mydata)=>{
    console.log()
    firstPortion.innerHTML=``
    let data= await mydata


 
   
    if(data.results>0){
        console.log(data.data.recipes)
        data.data.recipes.forEach((e)=>{
            let myHtml=`
            <div id="${e.id}" style="display: flex; padding-left: 20px; margin-top: 20px;">
                <img src=${e.image_url} alt="" style="width: 50px; height: 50px; border-radius: 50%;">
                <div style="padding-left: 120px;">
                    <p style="font-weight: 600; color: red;" >${e.title}</p>
                    <p style="margin-top: -15px; text-decoration:underline; cursor:pointer;" onclick="selectHandler('${e.id}')">${e.publisher}</p>
                </div>
            </div>
            
            `
        // document.getElementById('desc').setAttribute('onclick',selectHandler(allData,e.id))
        firstPortion.innerHTML+=myHtml
       
    })}
    else{
        firstPortion.innerHTML=`<div style="display: flex; justify-content: center; margin-top:50px">
        <div><h4>No Data</h4></div>
    
    </div>`
    }
}

async function  selectHandler(mine){
    SecondPortion.innerHTML=``
  
    let reqData= allData.find((e)=>{
        return  mine ==e.id})
        // console.log(reqData)


    let myprom=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${reqData.id}`
    ).then((data)=>{
        return data
    });
    let showData=await myprom.json()
    console.log(showData)
    let final_data=showData.data.recipe

console.log(final_data.ingredients)
    let my_html=` <div style="">
               
               
               
    <img src="${final_data.image_url}" alt="..." style="width: 100%; height: 200px; filter: opacity(0.5); background: transparent;">
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;" ><h4 style="  padding: 12px 20px; color: white; margin-top: -19px; margin-left:-100px; background-color: orange; border-top-right-radius: 10px; font-style: italic; transform: rotateZ(-20deg);">${final_data.title}</h4></div>
           <div style="display: flex; justify-content: center; margin-top: -50px; padding: 90px 0px 40px 0px; background-color: rgb(235, 235, 235);">
               <p style="margin-left: 40px;"><span><svg style="margin-right: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-clock" viewBox="0 0 16 16">
                   <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                   <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                 </svg></span>Serving Time:${final_data.cooking_time} Minutes</p>
               <p style="margin-left: 40px;"><span style="margin-right: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-people-fill" viewBox="0 0 16 16">
                   <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                 </svg></span>${final_data.servings} Serving</p>
           </div>


           <div style="display: flex; flex-direction: column; align-items: center;">
               <h4 style="padding: 12px 0;">RECIPE INGRIDEINTS</h4>
               <ul id='ual' style="display: flex;  flex-wrap: wrap; width: 80%;">
              
                 </ul>

           </div>


           <div style="display: flex; flex-direction: column; align-items: center; padding: 90px; background-color: wheat;">
               <h5>HOW TO COOK IT</h5>
               <p style="margin-top: 20px;">This recipe was carefully designed and tested by <span style='font-weight:bold; href='${final_data.source_url}'>${final_data.publisher}</span>.Please checkout directions at their website</p>
           </div>
       </div>`
       SecondPortion.innerHTML=my_html
       let uList=document.getElementById('ual');
       uList.innerHTML=``
       console.log(uList)
        final_data.ingredients.forEach((e)=>{
              
            uList.innerHTML+=`<li>${(e.quantity)? e.quantity:''} ${(e.unit)? e.unit:''} ${e.description}</li>`
        
       })
       
        
        
        
       
        
       
       
    
    
}
