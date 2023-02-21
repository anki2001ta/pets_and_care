const express=require("express");
const { petsdata,pets,careCreate,foodCreate,careget,foodget,caresingledata,foodsingledata,searchpets} = require("../Controllers/allproduct");

const petRoute=express.Router()
petRoute.use(express.json())
petRoute.route("/single/:id").get(petsdata)
petRoute.route("/:category").get(pets)
petRoute.route("/care").post(careCreate)
petRoute.route("/food").post(foodCreate)
petRoute.route("/care/groom").get(careget)
petRoute.route("/food").get(foodCreate)
petRoute.route("/food/feed").get(foodget)
petRoute.route("/caresingle/:id").get(caresingledata)
petRoute.route("/foodsingle/:id").get(foodsingledata)
petRoute.route("/pet/search").get(searchpets)

module.exports=petRoute