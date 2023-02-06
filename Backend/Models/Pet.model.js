const mongoose=require("mongoose");
const petSchema=mongoose.Schema({
    url:String,
    name:String,
    breed:String,
    location:String,
    color:String,
    price:Number,
    category:String
});

const petModel=mongoose.model("petcollection",petSchema)
module.exports={petModel}