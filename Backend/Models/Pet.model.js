const mongoose=require("mongoose");
const petdataSchema=mongoose.Schema({
    url:{
        type:String,
        required:[true,"Please Enter product url"]
    },
    name:{
        type:String,
        required:[true,"Please Enter product name"]
    },
    breed:{
        type:String,
        required:[true,"Please Enter product breed"]
    },
    color:{
        type:String,
        required:[true,"Please Enter product color"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product price"]
    },
    category:{
        type:String,
        required:[true,"Please Enter product category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter product stocks"],
        maxLength:[4,"Cannot exceeds 4"],
        default:1
    }
});

const petdataModel=mongoose.model("petcollection",petdataSchema)
module.exports={petdataModel}