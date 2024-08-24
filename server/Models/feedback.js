import { Schema, model } from "mongoose";

const FeedbackSchema =new Schema(
    {
        name: {
            type: String,
           
            
          },
          email: {
            type: String,
           
         
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
