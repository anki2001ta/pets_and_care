const { petdataModel}=require("../Models/pet.model")
const {careModel}=require("../Models/Care.model")
const {foodModel}=require("../Models/Food.model")


//default url for pets collection
exports.petsdata=async(req,res)=>{
  const pets_data= await petdataModel.find( {category:"birds"}).limit(5).skip((1-1)*5)

//   const care_data= await careModel.find()
//   const food_data= await foodModel.find()
  res.status(200).json({
   sucess:true,
   pets_data,
   // care_data,
   // food_data
})
};

//function to create pet data
//all pets route
exports.pets=async(req,res)=>{
   try{
   let petname=req.params.category;
  let {price,stock,color,sortBy,limit=16,page=1}=req.query;
  
  let temp={};
  temp.category=petname;
  if(price!==undefined){
   temp.price=price
  }
  if(stock!==undefined){
   temp.Stock=stock
  };
  if(color!==undefined){
   temp.color=color
  };
  let petbase;
  let sorts={};
  if(sortBy==undefined){
   petbase= await petdataModel.find(temp).limit(limit).skip((page-1)*limit)
  }
  else{
   if(sortBy=="asc"){
      sorts.price=1;
   }
   else if(sortBy=="desc"){
      sorts.price=-1;
   }
   petbase= await petdataModel.find(temp).sort(sorts).limit(limit).skip((page-1)*limit)
  }
 res.status(200).json({
    success:true,
    petbase
 })
}
catch(er){
   console.log(er)
}
};




//care get route
exports.careget=async(req,res)=>{
   try{
      let {price,sortBy,rating,used,limit=16,page=1}=req.query;
      let temp={};
      if(price!==undefined){
         temp.price=price
      };
      if(rating!==undefined){
         temp.rating=rating
      };
      if(used!==undefined){
         temp.Usedfor=used
      }
      let caredata;
      let sorts={};
      if(sortBy==undefined){
         caredata=await careModel.find(temp).limit(limit).skip((page-1)*limit)
      }
      else{
         if(sortBy=="asc"){
            sorts.Price=1;
         }
         else if(sortBy=="desc"){
            sorts.Price=-1
         }
         caredata= await careModel.find(temp).sort(sorts).limit(limit).skip((page-1)*limit)
      }
       
      res.status(200).json({
         sucess:true,
         caredata
      });
   }
   catch(er){
      console.log(er)
   }
   
  };





//food get
exports.foodget=async(req,res)=>{
   try{
      let {price,sortBy,rating,used,limit=16,page=1}=req.query;
      let temp={};
      if(price!==undefined){
         temp.price=price
      };
      if(rating!==undefined){
         temp.rating=rating
      };
      if(used!==undefined){
         temp.Usedfor=used
      }
      let food_data;
      let sorts={};
      if(sortBy==undefined){
         food_data=await foodModel.find(temp).limit(limit).skip((page-1)*limit)
      }
      else{
         if(sortBy=="asc"){
            sorts.Price=1;
         }
         else if(sortBy=="desc"){
            sorts.Price=-1
         }
      
       food_data= await foodModel.find(temp).sort(sorts).limit(limit).skip((page-1)*limit)
      }
       res.status(200).json({
         sucess:true,
         food_data
      });
   }
   catch(er){
      console.log(er)
   }
  
  };



//care route
exports.careCreate=async(req,res)=>{
   const carebase= await careModel.insertMany(req.body)
   res.send(req.body).json({
      sucess:true,
      carebase
   });
  };

//food route
exports.foodCreate=async(req,res)=>{
   const foodbase=await foodModel.insertMany(req.body)
   res.send(req.body).json({
      sucess:true,
      foodbase
   });
  };
