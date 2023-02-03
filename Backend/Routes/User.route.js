const express=require("express");
const user=express.Router();
user.use(express.json())
const UserModel=require("../Models/User.model")


// To get the user
user.get("/", async (req,res)=>{
try{
  const users=await UserModel.find({userID:req.body.userID});
  res.status(200).send(users)
}
catch(err){
 console.log(err)
 res.status(400).send({msg:"user not found"});
}
});


// Creating user
user.post("/create", async (req,res)=>{
    try{
      req.body.administration=false;
      await UserModel.create(req.body)
      res.status(200).send({msg:"User Data Added"})
    }
    catch(err){
     console.log(err)
     res.status(409).send({msg:"user  Data not found"});
    }
    });

// user data update
user.patch("/update/:userID", async (req,res)=>{
    try{
      const userID=req.params.userID;
      await UserModel.findByIdAndUpdate({_id:userID},req.body);
      res.status(200).send({msg:"User Data Modified"})
    }
    catch(err){
     console.log(err)
     res.status(400).send({msg:"user not found"});
    }
    });

    user.delete("/delete/userID", async (req,res)=>{
        try{
          const userID=req.params.body
          await UserModel.findByIdAndDelete(userID);
          res.status(200).send({msg:"User Data Deleted"})
        }
        catch(err){
         console.log(err)
         res.status(409).send({msg:"user data not found"});
        }
        });

module.exports=user
