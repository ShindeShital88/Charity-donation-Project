import { Schema, model } from "mongoose";

const CharitySchema =new Schema(
    {
        FirstName:{
            type: String,
            

        },
        LastName:{
            type: String,
    
        },
        Emailaddress:{
            type:String,
           
        },
        Password:{
            type : String
        },
       role:{
            type : String,
           
        }
    }
)
const Charity =model("Charity",CharitySchema)
export default Charity;
