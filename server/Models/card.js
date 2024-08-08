import { Schema, model } from "mongoose";
const CardSchema = new Schema(
   {
    img:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
   }
)
const Card = model("Card", CardSchema)
export default Card;