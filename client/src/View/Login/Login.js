import { useEffect, useState } from 'react';
import './Login.css';
 

import axios from 'axios';
import Navbar from '../../Component/Navbar/Navbar.js';
import { toast } from 'react-toastify';
import Footer from '../../Component/Footer/Footer.js';


export default function Login(){

    const [Emailaddress , setEmailaddress] = useState('');
    const [Password, setPassword]= useState('');


    const logindata =async()=>{
        await  axios.post(`http://localhost:7000/login`,{
            Emailaddress:Emailaddress,
            Password:Password
        }

        )
    }
    toast.success("Login successfully")
    const out =async ()=>{
        await axios.get(`http://localhost:7000/logins`)
    }
    useEffect(
        ()=>{
out()
        },[]
    )
    return(

<>
<Navbar/>
<div className='back'>
      <div className='Data'>
    
      <h2 style={{ textAlign: 'center', marginTop:40, padding:20 }}>Signin</h2>


           {/* <p className=''>Enter the mail to continue</p> */}
          <input type='text' placeholder='Enter the Email'required className='function' onChange={(e)=>{setEmailaddress(e.target.value)}}/><br></br>
         
          <input type='password' placeholder='password' required className='function' onChange={(e)=>{setPassword(e.target.value)}} /> <br></br>

         
        <button onClick={logindata} className='funyy'>Submit</button>

        
        </div>
        
        </div>
<Footer/>
</>



    )
}