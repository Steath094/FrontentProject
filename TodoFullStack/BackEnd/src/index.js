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
app.get("/api/",async (req,res)=>{
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

app.post("/api",async (req,res)=>{
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
app.patch("/api/:id",async (req,res)=>{
    try {
        const { id }= req.params
        const { name } = req.body;
        if (name.trim()=="") {
            throw new ApiError(400,"Todo Name is required to Update Todo")
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(400,"Todo Id is required to update Todo")
        }
        const todo = await Todo.findOneAndUpdate(
            {
                _id: id,
                name: name,
            }
        )
        if (!todo) {
            throw new ApiError(401,"Unauthorized requrest or Error occured while updating todo");
        }
        res
        .status(200)
        .json(
            new ApiResponse(200,[],"Todo Updated Successfully")
        )
    } catch (error) {
        res
        .status(500)
        .json(
            {"message":"Error While Updating Todo: ",error}
        )  
    }
})
app.patch("/api/toggle/:id",async (req,res)=>{
    try {
        const { id }= req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new ApiError(400,"Todo Id is required to toggle field of Todo")
        }
        const todo = await Todo.findById(id)
        if (!todo) {
            throw new ApiError(401,"Unauthorized requrest or Error occured while updating the isCompleted field of todo");
        }
        todo.isCompleted = !todo.isCompleted
        await todo.save();
        res
        .status(200)
        .json(
            new ApiResponse(200,todo,"Todo Completion Toggled Successfully")
        )
    } catch (error) {
        res
        .status(500)
        .json(
            {"message":"Error While Updating the isCompleted field of Todo: ",error}
        )  
    }
})
app.delete("/api/:id",async (req,res)=>{
   
    const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400,"Todo Id is required to Delete Todo")
    }
    const result = await Todo.deleteOne({_id: id})
    if (result.deletedCount==0) {
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