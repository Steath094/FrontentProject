import mongoose,{Schema} from "mongoose";

const todoSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        isCompleted:{
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true
    }
)

export const Todo = mongoose.model("Todo",todoSchema)
