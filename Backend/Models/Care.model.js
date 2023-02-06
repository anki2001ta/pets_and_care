const mongoose=require("mongoose")
const careSchema=mongoose.Schema({
    url:String,
    name:String,
    Usedfor:String,
    Price:Number,
    rating:Number
})

const careModel=mongoose.model("carecollection",careSchema)
module.exports={careModel}





