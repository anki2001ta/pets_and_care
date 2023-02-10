const mongoose=require("mongoose")
const careSchema=mongoose.Schema({
    url:{
        type:String,
        required:[true,"Please Enter product url"]
     },
     name:{
        type:String,
        required:[true,"Please Enter product url"]
     },
     Usedfor:{
        type:String,
        required:[true,"Please Enter product Usedfor"]
     },
     Price:{
        type:Number,
        required:[true,"Please Enter product Price"]
     },
     rating:{
        type:Number,
        required:[true,"Please Enter product rating value"]
     }

 });


const careModel=mongoose.model("carecollection",careSchema)
module.exports={careModel}





