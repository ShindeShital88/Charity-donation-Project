import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Charity from './Models/signup.js';
import From from './Models/donation.js';
import Card from './Models/card.js';
import Feedback from './Models/feedback.js';


const donation = express();
donation.use(express.json());
donation.use(cors());
const PORT = 7000;



donation.listen(PORT, () => {
    console.log('server is responding on 7000')
})
const mongodb = async () => {
    await mongoose.connect("mongodb+srv://shitalshinde:K9PAKPcDOwsd3xwx@cluster0.9g59jnd.mongodb.net/charitydonation")
    console.log("mongodb is connected successfully")
}
mongodb();



donation.post('/sign', (req, res) => {
    const { FirstName, LastName, Emailaddress, Password, who } = req.body
    try {
        const alldata = Charity.create({
            "FirstName": FirstName,
            "LastName": LastName,
            "Emailaddress": Emailaddress,
            "Password": Password,
            "who": who
        })
        res.json({
            success: true,
            data: alldata,
            msg: "show all data"
        })
    }
    catch (error) {
        res.json({
            success: false,
            msg: error.message
        })
    }
})

donation.get('/signs', async (req, res) => {
    const signdata = await Charity.find();
    res.json({
        data: signdata
    })
})


donation.post('/login',(req, res)=>{
    const { Emailaddress, Password} =req.body
    try{
        const logdata=Charity.create({
           " Emailaddress":Emailaddress,
          "  Password":Password
        })
        res.json({
            success:true,
            data:logdata,
            msg:"login successfully"
        })
    }catch(error){
        res.json({
            success:false,
            msg:error.msg
        })
    }
})

donation.get('/logins', async(req , res)=>{
    const logs = await Charity.find();
    res.json({
        data:logs
    })
})

donation.post('/donate', async (req, res) => {
    try{
    const { FirstName, LastName, PhoneNumber, Emailaddress, Birthdate, Address, Pincode, State, City, Amount } = req.body;
    
        const home = From.create({
            "FirstName": FirstName,
            "LastName": LastName,
            "PhoneNumber": PhoneNumber,
            "Emailaddress":Emailaddress,
            "Birthdate":Birthdate,
            "Address": Address,
            "Pincode":Pincode,
            "State":State,
            "City":City,
            "Amount":Amount
        })
        res.json({
            success: true,
            data: home,
            msg: "data is fetch"
        })
    }
    catch (error) {
        res.json({
            success: false,
            msg: error.message
        })
    }
})


donation.get('/donates', async (req, res) => {
    const dondata = await From.find();
    res.json({
        data: dondata
    })
})


donation.post('/Card',async(req,res)=>{
    try{
        const{img, title, description}=req.body
        const card = Card.create({
            "img":img,
            "title":title,
            "description":description
        })
        res.json({
            success:true,
            data:card,
            msg:"display All data."
        })
    }
    catch(error){
        res.json({
            success:false,
            msg:error.message
        })
    }
})
donation.delete('/donates/:_id', async(req, res)=>{
    const {_id} =req.params;
    const dele= await Note.deleteOne({_id:_id})
    res.json({

        data:dele,
        msg:"id is deleted"
    })
 })




 donation.post('/feedback', async(req, res)=>{
    try{
        const{ name, email, rating, comments, date}=req.body
        const feed = Feedback.create({
            "name":name,
             "email":email,
             "rating":rating,
             "comments":comments,
             "date":date
        })
        res.json({
            success:true,
            data:feed,
            msg:"display the feedback."
        })
    }
    catch(error){
    res.json({
        success:false,
        msg:error.message
    })
}
 })


 donation.get('/feedbacks', async (req, res) => {
    const feedall = await From.find();
    res.json({
        data:feedall
    })
})