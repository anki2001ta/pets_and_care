const express=require("express")
const env=require("dotenv")
env.config()
const connectDB =require("./Config/db")
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const user=require("./Routes/User.route")
const UserModel=require("./Models/User.model")
const {auth}=require("./Middlewares/Auth.middleware")
const cors=require("cors");
const petRoute=require("./Routes/Pets.route");
const cartRoute = require("./Routes/Cart.route");
const app=express()


app.use(express.json())
app.use(
    cors({
        origin:"*"
    })
)
app.use("/user",user)
app.use("/pets",petRoute)











app.post("/signup",async(req,res)=>{
 try{
 let data=await UserModel.find({email:req.body.email});
 if(data.length>0){
    res.status(200).send({msg:"User Already Exist"})
 }
 else{
    bcrypt.hash(req.body.password,4,async (err,hash)=>{
        if (err){
            res.status(500).send({msg:"SOMETHING WENT WRONG!"})
        }
        req.body.password = hash;
        req.body.administration=false;
        await UserModel.create(req.body);
        res.status(200).send({ msg: "User registered Successfully" });
    })
 }
 }
 catch(err){
    console.log(e);
    res.status(404).send({ msg: "Failed to create new user" });
 }
})






app.post("/login", async (req, res) => {
    try {
      let data = await UserModel.find({ email: req.body.email });
      if (data.length <= 0) {
        res.status(200).send({ msg: "User not found" });
      } else {
        bcrypt.compare(
          req.body.password,
          data[0].password,
           (err, result)=> {
            
            if (err) {
              res.status(500).send({ msg: "Something went wrong !" });
            } else if (result) {
              jwt.sign(
                { userID: data[0]._id },
                process.env.secreatkey,
                (err, token) => {
                  res
                    .status(200)
                    .send({ msg: "User login Successfully", token: token,displayName:data[0].name,administration: data[0].administration});
                }
              );
            }
            else{
                res.status(200).send({msg:"Wrong password"})
            }
          }
        );
      }
    } catch (e) {
      console.log(e);
      res.status(404).send({ msg: "Failed to login" });
    }
  });
  

  
  app.use(auth)
  app.use("/cart",cartRoute);

//connect database
app.listen(process.env.port,async()=>{
  try{
    await connectDB()
    console.log(`Database connected and listening to http://localhost:${process.env.port}`)
  }
  catch(err){
    console.log(err)
    console.log("App is not listening")
  }
})