import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser"
//initialization of app (all the power of express goes into app variable)
const app = express();

//dotenv configuration to hide important keys (MONGODB URL, API keys, PASSWORDS)
dotenv.config({
    path: './.env'
})
//all important middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())


//all routes import


//all routes declaration


//mongo db connection function called if it is executed then only backend will start
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080,()=>{
        console.log(`Server is running at the PORT ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection Failed !!!",err);
    
})