const express=require("express");
const {cartCreate} = require("../Controllers/allproduct");
const cartRoute=express.Router()
cartRoute.use(express.json())
cartRoute.route("/").post(cartCreate)


module.exports=cartRoute