const mongoose=require('mongoose')
const dScheme=mongoose.Schema(
    {
     Sem:{
        type:String,
        required:true
     },
     Department:{
        type:String,
        required:true
     },
     Drive_lin:{
        type:String,
        required:true,
     }
    }
)
const DNotesScheme=mongoose.model('DateScheme',dScheme);
module.exports=DNotesScheme;