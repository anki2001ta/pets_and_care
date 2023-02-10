const mongoose=require("mongoose")
const foodSchema=mongoose.Schema({
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
})

const foodModel=mongoose.model("foodcollection",foodSchema)
module.exports={foodModel}
