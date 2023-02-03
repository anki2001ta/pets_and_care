const jwt =require("jsonwebtoken");
require("dotenv").config()
const auth=(req,res,next)=>{
    const token=req.headers?.authorization?.split(" ")[1];
    if(token){
        console.log(token)
        const decoded=jwt.verify(token,process.env.secreatkey);
        console.log("decode",decoded)
        if(decoded){
            const userID=decoded.userID;
            req.body.userID=userID;
            next()

        }
        else{
            res.status(400).send({"msg":"user not found try logging"})
        }
    }
    else{
        res.status(400).send({"msg":"user not found try logging"})
    }
}

module.exports={
    auth
}