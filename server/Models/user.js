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
module.exports = mongoose.model('User', userSchema);
export default User;
