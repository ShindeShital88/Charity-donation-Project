import { useEffect, useState } from 'react';
import './donation.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';
export default function DonateCode() {
    const [From, setFrom] = useState([])
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Emailaddress, setEmailaddress] = useState('');
    const [Birthdate, setBirthdate] = useState('');  
    const [Address, setAddress] = useState('');
    const [Pincode, setPincode] = useState('');
    const [State, setState] = useState('');
    const [City, setCity] = useState('');
    const [Amount, setAmount] = useState('');



    const dontedata = async () => {

        try {
            const doner = await axios.post(`http://localhost:7000/donate`, {
                FirstName: FirstName,
                LastName: LastName,
                PhoneNumber: PhoneNumber,
                Emailaddress: Emailaddress,
                Birthdate: Birthdate,
                Address: Address,
                Pincode: Pincode,
                State: State,
                City: City,
                Amount: Amount
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
            <h2 style={{ textAlign: 'center', marginTop: 90 }}>Charity Donation Form</h2>
            <form>
                <div className='main-form'>
                    <div className='block'>

                        <div >
                            FirstName:<br></br><input type='text' onChange={(e)=>{
                                setFirstName(e.target.value)
                            }} className='allinput' placeholder='FirstName' />
                        </div>
                        <div>
                            LastName:<br></br><input type='text' onChange={(e)=>{
                                setLastName(e.target.value)
                            }} className='allinput' placeholder='LastName' />
                        </div>

                    </div>
                    <div className='block'>

                        <div >
                            PhoneNo:<br></br><input type='text' onChange={(e)=>{
                                setPhoneNumber(e.target.value)
                            }} className='allinput' placeholder='PhoneNumber' />
                        </div>
                        <div>
                            Email:<br></br><input type='text' onChange={(e)=>{
                                setEmailaddress(e.target.value)
                            }} className='allinput' placeholder='Emailaddress' />
                        </div>

                    </div>
                    <div className='block'>

                        <div >
                            Birthdate:<br></br><input type='date' onChange={(e)=>{
                                setBirthdate(e.target.value)
                            }} className='allinput' placeholder='Birthdate' />
                        </div>
                        <div>
                            Address:<br></br><input type='text' onChange={(e)=>{
                                setAddress(e.target.value)
                            }} className='allinput' placeholder='Address' />
                        </div>

                    </div>
                    <div className='block'>

                        <div>
                            Pincode:<br></br><input type='text' onChange={(e)=>{
                                setPincode(e.target.value)
                            }} className='allinput' placeholder=' Pincode' />
                        </div>
                        <div>
                            State:<br></br><input type='text' onChange={(e)=>{
                                setState(e.target.value)
                            }} className='allinput' placeholder='State' />
                        </div>

                    </div>
                    <div className='block'>

                        <div >
                            City:<br></br><input type='text' onChange={(e)=>{
                                setCity(e.target.value)
                            }} className='allinput' placeholder=' City' />
                        </div>
                        <div>
                       Amount:<br></br><input type='text' onChange={(e)=>{
                        setAmount(e.target.value)
                       }} className='allinput' placeholder='Amount' />
                        </div>

                    </div>
                    <button className='buton' onClick={dontedata}>Donate</button>

                </div>
            </form>


            <ToastContainer />

            <Footer />
        </>
    )
}