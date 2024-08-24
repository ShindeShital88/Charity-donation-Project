
import axios from "axios"
import { useState  , useEffect} from 'react'
// import { Mininav } from '../../../Component/Navbar/Mininav';
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import Minibar from "../navbar/navbar.js"
import './feedback.css';


export function Feed(){

    const [ allphone ,setAllphone] = useState([]);

    const allfeedbacks = async()=>{
        const getphone =await axios.get("http://localhost:7000/feedbacks")
        setAllphone(getphone.data.data)
        console.log(allphone)
    };

   
    const feedbackdelete = async (Feedback) => {
        const id = Feedback._id;
        const deletedata = await axios.delete(`http://localhost:7000/feedbacks/${id}`)
    //  alert("Are you sure you want to delete your name from the donation list?");
    allfeedbacks(deletedata.data.msg);
    toast.success("delete this feedback")
        console.log("deletedata.data.msg");
    }
    useEffect(
        () => {
            allfeedbacks();
        },
    )
    return(
        <>
        <Minibar/>
        <table border={1} className="format" >
                <thead >
                    <tr style={{height:50}}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>comments</th>
                        <th>date</th>                                                                     
                       
                    </tr>
                </thead>
                {allphone.reverse().map((info) =>
                    <>
                        <tbody>
                            <tr>
                              
                                <td >{info.name}</td>
                                <td>{info.email}</td>
                                <td>{info.comments}</td>
                                <td>{info.date}</td>
                                <td><button className="Dbtn" onClick={()=>{feedbackdelete(info)}}>Delete</button></td>
                               </tr>
                        </tbody>
                    </>
                )}
                 <ToastContainer/>
            </table>
        </>
    )
}