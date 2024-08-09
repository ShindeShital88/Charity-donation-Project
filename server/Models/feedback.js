import { Schema, model } from "mongoose";

const FeedbackSchema =new Schema(
    {
        name: {
            type: String,
            required: true,
            
          },
          email: {
            type: String,
            required: true,
         
          },
          rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
          },
          comments: {
            type: String,
            trim: true
          },
          date: {
            type: Date,
            default: Date.now
          }
        });
    
const Feedback =model("Feedback",FeedbackSchema)
export default Feedback;
