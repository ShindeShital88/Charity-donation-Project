import './Card.css';




export function MainCard({img, title, description})
{
    return(
        <>
        <div className='div-m' data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
        <div className='main-div-div'>
        <img className='imgee' src={img}/>
<div>
        <h4 className='img-title'>{title}</h4>

</div>
<div>
        <p className='img-des'>{description}</p>
        </div>
        <a href='/Donate'><button className='bbt'>Donation</button></a>

        </div>
        </div>
        </>
    )
}