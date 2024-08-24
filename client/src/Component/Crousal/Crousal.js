import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Crousal.css';
import photo from './photo.webp';
import counter from './counter.webp'
import pic from './image4.webp';

function Crousal() {
  return (
    <Carousel >
      <Carousel.Item >
       <img src={photo} className='carousal'/>
        <Carousel.Caption>
           
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={counter} className='carousal'/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={pic} className='carousal'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Crousal;