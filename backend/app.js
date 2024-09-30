const express=require('express')
const app=express()
const cors=require('cors')
const mongoose = require('mongoose');
const router=require('./routes/route')

app.use(express.static('public'));
app.use(express.json())
app.use(cors())

// mongoose.set('strictQuery',false);
// mongoose.connect("YOUR KEY")
// .then(()=>{
//     console.log("connected to db");

// }).catch((error)=>
// {
// console.log(error);
// }
// )

app.use('/',router)

app.listen(7080,()=>{
    console.log("running");
});