import { useEffect, useState } from 'react';
import './Sign.css';

import axios from 'axios';
import Navbar from '../../Component/Navbar/Navbar.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../Component/Footer/Footer.js';
// import NavScrollExample from './component/Navbar/Navbar.js'

export default function Sign() {
    const [Charity, setCharity] = useState([])
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Emailaddress, setEmailaddress] = useState('');
    const [Password, setPassword] = useState('');
    const [role, setRole] = useState('');


    const SignupData = async () => {


        await axios.post(`http://localhost:7000/sign`, {
            FirstName: FirstName,
            LastName: LastName,
            Emailaddress: Emailaddress,
            Password: Password,
            role: role
        })
        toast.success("Signup successfully")

    }


    const local = async () => {

        const number = await axios.get(`http://localhost:7000/signs`)
        setCharity(number.data.data)
    }
    useEffect(
        () => {
            local();

        }
    )
    return (
        <>
        <Navbar/>

            <div className='sign'>
                <h2 className='user'>Signup</h2>

                <div >
                    <input type='text' className='input-sign' placeholder='Enter the First name' onChange={(e) => { setFirstName(e.target.value) }} /><br></br><br></br>


                    <input type='text' className='input-sign' placeholder='Enter the Last name' onChange={(e) => { setLastName(e.target.value) }} /><br></br><br></br>


                    <input type='text' className='input-sign' placeholder='Enter the Email' onChange={(e) => { setEmailaddress(e.target.value) }} /><br></br><br></br>


                    <input type='password' className='input-sign' placeholder='Enter the Password' onChange={(e) => { setPassword(e.target.value) }} /><br></br><br></br>

                    <select className='input-sign' onClick={(e) => {
                        setRole(e.target.value)
                    }}>
                        <option>Signup as</option>
                        <option>Admin</option>
                        <option>Donar</option>
                        <option>User</option>
                    </select>

                    <button className='type' onClick={SignupData}>submit</button>
                    <p className='paragraph'>Already have an account? <a href='/Login' className='create'>Signin</a></p>
                </div>
<ToastContainer/>
            </div>


<Footer/>

        </>



    )
}