// import Navbar from '../../component/Navbar/Navbar';
import './mission.css';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';
import shiksha from './shiksha.webp';
import img5 from './swasthya.webp';
import img6 from './ahar.webp';
import heart from './heart.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// import first from './first.png'
export default function Vision(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <>
        <Navbar/>
        <h3 className='vision'>Our Feeding Iniatives</h3>        
       <p className='para'>Donate with Akshaya Chaitanya & feed the needy children & caregivers in Municipal Schools & Hospitals Each of our<br></br> three feeding initiatives aims at creating an enhanced education & healthcare infrastructure in Mumbai by harnessing the power<br></br> of nutritious meals.</p>


<div className='min-div'>
    <div className='img-class' data-aos="fade-right" data-aos-duration="3000" >
        <img className='bal' src={shiksha}/>
        <h5 className='ahar'>Bal Shiksha Ahara</h5>
        <p className='para-class'>Municipal School Meals Programme</p>
    </div>
    <div className='img-class' data-aos="fade-up" data-aos-duration="3000">
        <img className='bal' src={img5}/>
        <h5 className='ahar'>Swasthya Ahara</h5>
        <p className='para-class'>Government Hospital Feeding Programme</p>
    </div>
    <div className='img-class'data-aos="fade-left" data-aos-duration="3000">
        <img className='bal' src={img6}/>
        <h5 className='ahar'>Paushtik Ahara</h5>
        <p className='para-class'>Meals On Wheels Programme</p>
    </div>
</div>
<br></br>



<hr></hr>
<h2 className='about'>About Us</h2>

     <div className='new-about'>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="3000">
        <h3>Swasthya Ahara</h3>
        <p>Providing free, unlimited, nutritious lunch to patients' families<br></br> keeps them healthy and helps save for medication.</p>
       </div>
       <div data-aos="zoom-in"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="3000">
       <h3>Paushtik Ahara</h3>
       <p>Providing free, unlimited, nutritious lunch combined with <br></br> education prepares children in slum areas for a bright future.</p>
       </div>
       <div  data-aos="fade-left"
     data-aos-duration="3000">
        <h3>Bal Shiksha Ahara</h3>
        <p>Providing free, millet-based nutritious breakfast counters<br></br> classroom hunger for better learning.</p>
       </div>
        </div>  
        <h1 className='miss'>Our Mission</h1>
<div className='div-vis'>
   
    <p className='vis'>Our mission is to empower individuals and organizations to make a<br></br> meaningful difference in the world by providing an accessible,<br></br> transparent, and efficient platform for charitable donations. We aim to <br></br>connect donors with causes they care about, ensuring that every<br></br> contribution makes a tangible impact.</p>
<div>
    <img className='back-img' src={heart}/>
</div>
</div>
<hr></hr>
<div>

    {/* <h5 className='vlue'><u>Our Values</u></h5>
    <p className='vlue'>Our vision is to alleviate poverty by enabling the world to give</p>
    <div className='parent-main'>
        <div className='parent-div'> */}
       
        </div>
        {/* <div className='parent-div'>
<img src={first}/>
        </div>
        <div className='parent-div'>

        </div>
        <div className='parent-div'>

        </div> */}
    {/* </div>

</div> */}

<Footer />
        </>
     )
}