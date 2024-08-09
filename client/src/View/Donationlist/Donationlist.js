import axios from "axios"
import { useEffect, useState } from "react";
import './Donationlist.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from "../../Component/Footer/Footer.js";


export default function DonateList() {
    const [From, setFrom] = useState([])

    const variable = async () => {
        const no = await axios.get("http://localhost:7000/donates")
        console.log(no.data.data)
        setFrom(no.data.data)
    }

    const deleteAPI = async (From) => {
        const id = From._id;
        const deletedata = await axios.delete(`http://localhost:7000/donates/${id}`)
        alert("Donation delete sucessfully");
        variable(deletedata.data.msg);
        console.log("deletedata.data.msg");
    }
    useEffect(
        () => {
            variable();
        }, [])

    return (
        <>
 <Navbar />
            <table border={1} className="table">
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>   
                        <th>PhoneNumber</th>
                        <th>Emailaddress</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {
                    From.map((Data) =>
                        <>
                            <tbody>

                                <tr>
                                    <td>{Data.FirstName}</td>
                                    <td>{Data.LastName}</td>
                                    <td>{Data.PhoneNumber}</td>
                                    <td>{Data.Emailaddress}</td>
                                    <td>{Data.Address}</td>
                                    <td>{Data.Pincode}</td>
                                    <td>{Data.State}</td>
                                    <td>{Data.City}</td>
                                    <td>₹{Data.Amount}</td>
                                    <td><button className='deletbtn' onClick={()=>{deleteAPI(Data)}}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                }

            </table>


            <Footer />
        </>
    )
}