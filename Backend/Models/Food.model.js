const mongoose=require("mongoose")
const foodSchema=mongoose.Schema({
    url:String,
    name:String,
    Usedfor:String,
    Price:Number,
    rating:Number
})

const foodModel=mongoose.model("foodcollection",foodSchema)
module.exports={foodModel}
