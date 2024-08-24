import './Home.css';
// import NavScrollExample from '../../component/Navbar/Navbar.js';
import Crousal from '../../Component/Crousal/Crousal.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mission from './homeimage.webp';
import hungry from './hungry.webp';
import school from './school.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Navbar from '../../Component/Navbar/Navbar.js';
import Footer from '../../Component/Footer/Footer.js';
import imagess from './imageess.webp';

import support from './support.webp';
import eate from './eate.webp';
import { MainCard } from '../../Component/Card/Card.js';
import home from './Home.json';
export default function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <Crousal />
      <h2 className='card-card'>Hear stories of our beloved beneficiaries ❤️</h2>

      <div className='card-card3'>
       
        <img className='img-img' src={imagess} />
    
        <div className='div-div' data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">

          <h4 className='div-h1' >Financial Struggle Amidst Medical Crisis: a Parent's Heartfelt journey</h4>
          <p className='benefit'>"My son is admitted here for kidney stone treatment costing around ₹15,000, which I can't afford. I borrowed money for treatment, but daily travel from Mankhud to the hospital is expensive.I can't travel by train, so I take a bus from autorickshaw, which adds to the cost. I can't afford restaurant food or go home for lunch, so I skip meals, making me weak."  </p>
        </div>
      </div>

      <hr></hr>

      <h3 className='data1'>Give Monthly</h3>
      <p className='data'>Create sustained impact. Support verified projects. Get regular updates. Save tax. Cancel anytime.</p>


      {
        home.map(
          (data) => {
            return (
              <>
                < MainCard img={data.img} title={data.title} description={data.description} />
              </>
            )
          }
        )
      }




      <div className='flex'>
        <h3 className='on'>India’s most trusted online
          donation platform</h3>
      </div>
      <div className='plat'>
        <div className='plat2'>
          <h2>2.7M+</h2>
          <p>Donations</p>
        </div>
        <div className='plat2'>
          <h2>15M+</h2>
          <p>Live Impacted</p>
        </div>
        <div className='plat2'>
          <h2>3000+</h2>
          <p>Verified Non Profits</p>
        </div>
        <div className='plat2'>
          <h2>300+</h2>
          <p>Corporate Partners</p>
        </div>
      </div>
      <div>
        <img className='support' src={support} />
      </div>
      <div className='main-eate'>
        <div className='employe'>
          <h3>Employee Volunteering</h3>
          <p>we're dedicated to eradicating hunger and empowering communities <br></br> in Mumbai through unified efforts. <br></br> From distributing nutritious meals to addressing underlying poverty issues, <br></br> we're committed to transforming lives.</p>
        </div>
        <div data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img className='eate' src={eate} />
        </div>
      </div>
      <Footer />
    </>
  )
}