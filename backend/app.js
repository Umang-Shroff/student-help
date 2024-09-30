require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const mongoose = require('mongoose');
const router=require('./routes/route')

app.use(express.static('public'));
app.use(express.json())
app.use(cors())
const API_KEY=process.env.MONGO_KEY
mongoose.set('strictQuery',false);

mongoose.connect(`mongodb+srv://boombot11:${API_KEY}@test.md8hana.mongodb.net/`)
.then(()=>{
    console.log("connected to db");

}).catch((error)=>
{
console.log(error);
}
)

app.use('/',router);

app.listen(7080,()=>{
    console.log("running");
});