const foodmenu = [
    // Breakfast Items
    {
      category: "Breakfast",
      name: "Classic Pancakes",
      price: 6.99,
      description: "Fluffy pancakes served with maple syrup and butter.",
      image: "./download (1).jpg",
    },
    {
      category: "Breakfast",
      name: "Egg and Cheese Sandwich",
      price: 4.99,
      description: "Scrambled eggs and melted cheese on a toasted bun.",
      image: "./eggandchees.jpg",
    },
  
    // Lunch Items
    {
      category: "Lunch",
      name: "Grilled Chicken Salad",
      price: 8.49,
      description: "Grilled chicken breast on a bed of fresh greens with balsamic vinaigrette.",
      image: "./grilledcheez.jpg",
    },
    {
      category: "Lunch",
      name: "Vegetable Wrap",
      price: 7.99,
      description: "Assorted veggies wrapped in a tortilla with hummus spread.",
      image: "./vegetavlewarap.jpg",
    },
  
    // Dinner Items
    {
      category: "Dinner",
      name: "Steak with Mashed Potatoes",
      price: 15.99,
      description: "Juicy steak served with creamy mashed potatoes and gravy.",
      image: "./Steak with Mashed Potatoes.jpg",
    },
    {
      category: "Dinner",
      name: "Salmon with Asparagus",
      price: 13.99,
      description: "Pan-seared salmon fillet with roasted asparagus and lemon butter sauce.",
      image: "./Salmon with Asparagus.jpg",
    },
  
    // Shake Items
    {
      category: "Shakes",
      name: "Chocolate Milkshake",
      price: 4.49,
      description: "Creamy chocolate milkshake topped with whipped cream and a cherry.",
      image: "./Chocolate Milkshake.jpg",
    },
    {
      category: "Shakes",
      name: "Strawberry Smoothie",
      price: 4.99,
      description: "Fresh strawberry smoothie blended with yogurt and honey.",
      image: "./Strawberry Smoothie.jpg",
    },
  ];
  let foodItemDiv=document.querySelector('.menues')

 //for buttonMaking 
let btns=document.querySelector('.forbtn');
let btnArray=['All','Breakfast','Lunch','Dinner','Shakes']

btnArray.forEach((dtnData)=>{
     btns.innerHTML+=`<button class='mybtns' onclick=CallHandler('${dtnData}')>${dtnData}</button>`
   
    })
    ///




//for menue


function CallHandler(fill) {foodmenu.filter((myData)=>{
    foodItemDiv.innerHTML=''
    if(myData.category.includes(fill)){
    return true}
    
    else if(fill=='All') {
        return true
    }
    
    
}).forEach((myList)=>{
    
      foodItemDiv.innerHTML+=`<div class="food ">
      <img src="${myList.image}" alt="">
               <div class="side">
                <div style="display: flex; justify-content: space-between;">
                <h3>${myList.name}</h3>
               <h4 style="margin-top: 3px; color: orange;">${myList.price}</h4>
              </div>
              <p>${myList.description}</p>
              </div>
            </div>
  </div>
    `

        
    console.log(myList)
    
    
})

}

// CallHandler('Dinner')

CallHandler('All')
