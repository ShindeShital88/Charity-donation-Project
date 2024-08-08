import mongoose, { Schema, model } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        Card_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Card'
        },
        user:{
            type:String,
    
        },
    }
)
const User = model("User", UserSchema);
export default User;
