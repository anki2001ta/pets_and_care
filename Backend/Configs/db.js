const mongoose=require("mongoose")
const env=require("dotenv")
env.config()
mongoose.set('strictQuery', false);
const connection=mongoose.connect(process.env.mongoose_url)

module.exports= connection
