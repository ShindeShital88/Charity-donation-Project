import { useEffect, useState } from 'react';
import './Feedback.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';


export default function Feedback() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState('');
    const [comments, setComments] = useState('');
    const [date, setDate] = useState('');
    

    const feedbackdata = async () => {


        await axios.post(`http://localhost:7000/Feedback`, {
            name: name,
            email: email,
            rating: rating,
            comments: comments,
            date: date
        })
        toast.success("Feedback successfully")



    }

    const [feedData, setFeedData] = useState([]);
    const allFeedData = async () => {
        const allcomment = await axios.get("http://localhost:7000/Feedbacks");

        setFeedData(allcomment.data.data)


    }

    useEffect(()=>{
        allFeedData();
    })


    // const deleteAPI = async (note) => {
    //     const id = note._id;
    //     const deletenote = await axios.delete(`http://localhost:2000/note/${id}`)
    //     toast.error("feedback delete sucessfully");
    //     allFeedData(deletenote.data.msg);
    // }
    return (
        <>
        <Navbar/>
            <div>

                <form className='feedback'>
                <h4 style={{textAlign:'center'}}>Feedback Form</h4>
                    <input type=' text' required className='feed-input' onChange={(e) => {
                        setName(e.target.value)
                    }} placeholder='Enter Your Name' />

                    <input type='text' className='feed-input' onChange={(e) => {
                        setEmail(e.target.value)
                    }} placeholder='Enter Your Email' />

{/* <span onClick={onClick} style={{ cursor: 'pointer', color: selected ? 'gold' : 'grey' }}>
      ★
    </span> */}
                    {/* <input type='text' className='feed-input' onChange={(e) => {
                        setRating(e.target.value)
                    }} placeholder='Enter the rating' /> */}

                    <input type='text'  required className='feed-input' onChange={(e) => {
                        setComments(e.target.value)
                    }} placeholder='Enter Your comments' />

                    <input type='date' className='feed-input' onChange={(e) => {
                        setDate(e.target.value)
                    }} />
                    <button className='feeddata'onClick={feedbackdata}>Submit</button>
                </form>


                {
                    feedData.map((all) => {
                        return (
                            <>
                            <div className='allfeedback'>
                                <h2>{all.name}</h2>
                                <h3>{all.email}</h3>
                                <h3>{all.rating}</h3>
                                <h3>{all.comments}</h3>
                                <h3>{all.date}</h3>
                            </div>
                            </>
                        )
                    }


                    )
                }


                <ToastContainer />

            </div>


<Footer/>


        </>
    )
}