// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './Navbar.css';
import logomain from './logos.jpg';
function Navbar(){

  return(
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand space" href="/"><img className='logomain' src={logomain}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active space" aria-current="page" className='home' href="/">Home</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link space" className='home' href="/Vision">AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link space" className='home' href="/Donate">Donation</a>
        </li>
        <li class="nav-item">
          <a class="nav-link space" className='home' href="/Donatelist">DonateList</a>
          
          
        </li>
        <li class="nav-item">
          <a class="nav-link space" className='home' href="/sign">Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link space" className='home' href="/Login">Signin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}
  export default Navbar;
