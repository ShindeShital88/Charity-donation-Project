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
         
          comments: {
            type: String,
           
          },
          date: {
            type: Date,
            
          }
        });
    
const Feedback =model("Feedback",FeedbackSchema)
export default Feedback;
