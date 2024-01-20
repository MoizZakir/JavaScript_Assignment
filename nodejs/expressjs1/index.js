import  express  from "express";
// import  dotenv  from "dotenv";
// dotenv.config({
//     path:'./config.env'
// })
// console.log(process.env.PORT)



const app=express()
const Port=8000
app.use(express.json())
app.listen(Port,()=>{
    console.log(`server statrted at port ${Port}`)
    console.log('moiz')
})


//middle layers 

// app.use((req,res,next)=>{
//     console.log('first middle layer')
//     next()
// })


//api responses


const products = [
    { id: "1", name: "Laptop", price: 1200, color: "Silver" },
    { id: "2", name: "Smartphone", price: 800, color: "Black" },
    { id: "3", name: "Headphones", price: 100, color: "Red" },
    { id: "4", name: "Camera", price: 600, color: "Blue" },
    { id: "5", name: "Backpack", price: 50, color: "Gray" },
    { id: "6", name: "Watch", price: 300, color: "Gold" },
    { id: "7", name: "Gaming Console", price: 400, color: "Black" },
    { id: "8", name: "Desk Chair", price: 150, color: "Green" },
    { id: "9", name: "Coffee Maker", price: 80, color: "Silver" },
    { id: "10", name: "Bluetooth Speaker", price: 70, color: "Black" }
  ];

app.get('/products/:id',(req,res)=>{
    // res.send('its first page of website '+ req.params.id)

    let productFinder=products.find((e)=>{
        return req.params.id==e.id})
      if(!productFinder){
        return(
        res.json([
            {
                status:false,
                messsage:'No data Found'
            }
        ]))
      }  
      res.json(productFinder
        )
})
app.get('/products',(req,res)=>{
    res.json([{
        status:true,
        data:products}])
    
})
app.get('/',(req,res)=>{
    res.send(`<h1>First page</h1>`)
})

let api=`
http://localhost:8000/products`

