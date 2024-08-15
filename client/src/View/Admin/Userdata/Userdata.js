import './Userdata.css'
import axios from "axios"
import { useState  , useEffect} from 'react'
// import { Mininav } from '../../../Component/Navbar/Mininav';
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
// import Charity from '../../../../../server/Models/signup';




export function User(){

    const [ allphone ,setAllphone] = useState([]);

    const getAllphone = async()=>{
        const getphone =await axios.get("http://localhost:7000/signs")
        setAllphone(getphone.data.data)
        console.log(allphone)
    };

   
    const deleteAPI = async (Charity) => {
        const id = Charity._id;
        const deletedata = await axios.delete(`http://localhost:7000/signs/${id}`)
    //  alert("Are you sure you want to delete your name from the donation list?");
        getAllphone(deletedata.data.msg);
        console.log("deletedata.data.msg");
    }
    useEffect(
        () => {
            getAllphone();
        },
    )
    return(
        <>
        {/* <Mininav/> */}
        <table border={1} className="table">
                <thead className="thead">
                    <tr>
                      
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Emailaddress</th>
                        <th>Password</th>
                        <th>Role</th>                                                                     
                       
                    </tr>
                </thead>
                {allphone.reverse().map((data) =>
                    <>
                        <tbody>
                            <tr>
                              
                                <td>{data.FirstName}</td>
                                <td>{data.LastName}</td>
                                <td>{data.Emailaddress}</td>
                                <td>{data.Password}</td>
                                <td>{data.role}</td>
                                <td><button className="Dbtn" onClick={()=>{deleteAPI(data)}}>Delete</button></td>
                               </tr>
                        </tbody>
                    </>
                )}
                 <ToastContainer/>
            </table>
        </>
    )
}