import { useEffect, useState } from 'react';
import './donation.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';
export default function Donate() {
    const [From, setFrom] = useState([])
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Emailaddress, setEmailaddress] = useState('');
    // const [Birthdate, setBirthdate] = useState('');  
    const [Address, setAddress] = useState('');
    const [Pincode, setPincode] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [ Amount, setAmount] = useState('');



    const dontedata = async () => {

        try {
            const doner = await axios.post(`http://localhost:7000/donate`, {
                FirstName: FirstName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Emailaddress: Emailaddress,
                // Birthdate: Birthdate,
                Address: Address,
                Pincode: Pincode,
                State: State,
                City: City,
                Amount:  Amount     
            })
            console.log(doner)
            toast.success("donation successfully")
        }
        catch (e) {
            console.log(e.message)
            toast.error("Failed to donate");
        }

    }
    const variable = async () => {
        const no = await axios.get("http://localhost:7000/donates")
        console.log(no.data.data)
        setFrom(no.data.data)
    }

    useEffect(
        () => {
            variable();
        }, [])






    return (
        <>
            <Navbar />
            <h3 className='child'>Donation Form</h3>
            <div className='main-div'>
                <form className='from'>

                    <div>
                   <span className='span'>FirstName :</span>  <input type='text' className='main-input'  required onChange={(e) => {
                        console.log(e.target.value)
                        setFirstName(e.target.value)
                    }} placeholder='First Name' />

{/* <br></br> */}

                    <span className='span1'>LastName :</span> <input type='text' className='main-input' required onChange={(e) => {
                        console.log(e.target.value)
                        setLastName(e.target.value)
                    }} placeholder='Last Name' /><br></br>
                   
                    </div>
                   <span className='span'> PhoneNo : </span><input type='number' className='main-input' required onChange={(e) => {
                        console.log(e.target.value)
                        setPhoneNumber(e.target.value)
                    }} placeholder='PhoneNo' /> 

{/* <br></br> */}
                 <span className='span1'> Email : </span> <input type='email' className='main-input1'  required onChange={(e) => {
                        console.log(e.target.value)
                        setEmailaddress(e.target.value)
                    }} placeholder='Email' /><br></br>

                    {/* Birthdate : <input type='date' className='valu-new' onChange={(e) => {
                        setBirthdate(e.target.value)
                    }} /> */}

                   <span className='span'> Address : </span><input type='text' className='main-input' required  placeholder='Address' onChange={(e) => {
                        setAddress(e.target.value)
                    }} />
{/* <br></br> */}
               <span className='span1'> Pincode:</span> <input type='number' className='main-input2' required placeholder='pincode' onChange={(e) => {
                        setPincode(e.target.value)
                    }} /><br></br>


                   <span className='span'> State :</span> <input type='text' className='main-input' required  placeholder='State' onChange={(e) => {
                        setState(e.target.value)
                    }} />
                   {/* <br></br> */}
                  <span className='span1'>City:</span> <input type='text' className='main-input4' required placeholder='City' onChange={(e) => {
                        setCity(e.target.value)
                    }} />
                    



                    <p >  How Much do you want to donate?</p>
                    <input type='text' className='effect' onChange={(e) => {
                        console.log(e.target.value)
                        setAmount(e.target.value)
                    }} placeholder='Donation Amount' />

                    <button className='buton' onClick={dontedata}>Donate</button>
                </form>


                <ToastContainer />
            </div>
<div>
    
</div>
<Footer />
        </>
    )
}