import './Footer.css';
import logos from './logos.jpg';
import insta from './instagram.png';
import linked from './linkedin.png';
import github from './github.png';

export default function Footer(){
    return(
        <>
        <div className='main-foot'>
<div className='footerr'>
<div>
    <img className='logo-foot' src={logos}/>
    </div>
    <div>
        <p className='aboutus'>AboutUs</p>
        <ul className='list' >Swasthya Ahar</ul>
        <ul className='list'>Paushtik Ahar</ul>
        <ul className='list'>Bal Shiksha Ahar</ul>
    </div>
    <div>
        <p className='aboutus'>Donation</p>
        <ul className='list'>online  donation</ul>
    </div>
    <div>
    <h5 className='aboutus'>Follow us: <br></br>
              <a href='https://www.instagram.com/shitalshinde8864?utm_source=qr&igsh=MjJkd2l4ZDNtcnU0"'><img className='insta' src={insta} /></a>
              <a href='https://www.linkedin.com/in/shinde-shital-4bb8a9286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img className='insta' src={linked} /></a>
              <a href=''><img className='insta' src={github} /></a>
            </h5>
    </div>
  
</div>







        </div>
        
        
        
        
        </>
    )
}