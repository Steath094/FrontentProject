import express, { json } from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { Todo } from "./models/todo.model.js";
import { ApiResponse } from "./utils/ApiResponse.js";
import { ApiError } from "./utils/ApiError.js";
import mongoose from "mongoose";
//initialization of app (all the power of express goes into app variable)
const app = express();

//dotenv configuration to hide important keys (MONGODB URL, API keys, PASSWORDS)
dotenv.config({
    path: './.env'
})
//all important middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//all routes declaration
app.get("/",async (req,res)=>{
    try {
        const todo = await Todo.find()
        res
        .status(200)
        .json(
            new ApiResponse(200,todo,"Todos Fetched Successfully")
        )
    } catch (error) {
        res
        .status(500)
        .json(
            {"message":"Error While Retreiving Todo: ",error}
        )  
    }
})

app.post("/",async (req,res)=>{
    try {
        const { name } = req.body;
        if (name.trim()=="") {
            throw new ApiError(400,"Todo Name is required to Create Todo")
        }
        const todo = await Todo.create({name})
        res
        .status(200)
        .json(
            new ApiResponse(200,todo,"Todo Created Successfully")
        )
    } catch (error) {
        res
        .status(500)
        .json(
            {"message":"Error While Creating Todo: ",error}
        )  
    }
})
app.patch("/:id",async (req,res)=>{
    try {
        const { id }= req.params
        const { status=0 } = req.query;
        const { name } = req.body;
        if (name.trim()=="") {
            throw new ApiError(400,"Todo Name is required to Update Todo")
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(400,"Todo Id is required to Delete Todo")
        }
        const todo = await Todo.findByIdAndUpdate(id,
            {
                name: name,
                isCompleted: status==1?true:false
            }
        )
        if (!todo) {
            throw new ApiError(401,"Unauthorized requrest or Error occured while updating todo");
        }
        res
        .status(200)
        .json(
            new ApiResponse(200,todo,"Todo Updated Successfully")
        )
    } catch (error) {
        res
        .status(500)
        .json(
            {"message":"Error While Updating Todo: ",error}
        )  
    }
})
app.delete("/:id",async (req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400,"Todo Id is required to Delete Todo")
    }
    const todo = await Todo.findByIdAndDelete(id)
    console.log(todo);
    if (!todo) {
        throw new ApiError(401,"Unauthorized requrest or Error occured while deleteing todo");
    }
    res
    .status(200)
    .json(
        new ApiResponse(200,[],"Todo Deleted Successfully")
    )

})


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