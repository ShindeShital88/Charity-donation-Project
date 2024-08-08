import { Schema, model } from "mongoose";

const FromSchema = new Schema(
    {
        FirstName: {
            type: String,

        },
        LastName: {
            type: String,

        },
        PhoneNumber: {
            type: String

        },
        Emailaddress: { 
            type: String,

        },
        Address: {
            type: String,
        },
        Pincode: {
            type: String,
        },
        State: {
            type: String,
        },
        City: {
            type: String,
        },
        Amount: {
            type: String,

        },

    }
)
const From = model("From", FromSchema);
export default From;
