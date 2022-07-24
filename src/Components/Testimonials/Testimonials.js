import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import R from "../../assets/Testimonials/R.png";
import L from "../../assets/Testimonials/L.png";
import header from "../../assets/Testimonials/header.svg";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const LeftTestimonials = [
    {
      id:1,
      testimonial: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
      client:'Serena Williams',
      date: '24 March 2022',
      star: <StarIcon style={{ color: "#F2C94C" }}/>,
    },
    {
      id:2,
      testimonial: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
      client:'Serena Williams',
      date: '24 March 2022',
      star: <StarIcon style={{ color: "#F2C94C" }}/>,
    },
    {
      id:3,
      testimonial: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
      client:'Serena Williams',
      date: '24 March 2022',
      star: <StarIcon style={{ color: "#F2C94C" }}/>,
    },
    {
      id:4,
      testimonial: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
      client:'Serena Williams',
      date: '24 March 2022',
      star: <StarIcon style={{ color: "#F2C94C" }}/>,
    },
    {
      id:5,
      testimonial: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
      client:'Serena Williams',
      date: '24 March 2022',
      star: <StarIcon style={{ color: "#F2C94C" }}/>,
    }
]


const RightTestimonials = [
  {
    id:1,
    testimonial: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
    client:'Serena Williams',
      date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:2,
    testimonial: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
    client:'Serena Williams',
      date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:3,
    testimonial: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
    client:'Serena Williams',
      date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:4,
    testimonial: '9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
    client:'Serena Williams',
      date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:5,
    testimonial: '10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices ultrices nibh lacus, ultrices vulputate dignissim Eget ultrices id lacus, urna, nec mattis proin lobortis.',
    client:'Serena Williams',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  }
]


const Testimonials = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay:true,
    // speed: 3000,
    // autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
    
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }


  return (

    <div className='Testimonial-main'>

      <div className='Testimonial-header container'>
        <img src={header} alt="header" className='testimonial-bg-header' /> 
          <h1 className='testimonial-header-h1'>Client Reviews</h1>
      </div>
      <div className='testimonial-container'>
         <div className="testimonials-left">
         

            <Slider className="testimonial-L" {...settings}>
              {LeftTestimonials.map((data)=>{
                return (
               <>
                <div key={data.id} className='swiper-client-msg'>
                    <img className='left' src={L} alt="R" />
                      <p>{data.testimonial}</p>
                    <img src={R} className="right" alt="L" />
                    
                    <hr className='testimonial-hr'/>

                    <div className='client-data-details'>
                      {data.star}
                      <h5>{data.client}</h5>
                      <p>{data.date}</p>
                    </div>
                  </div>
               </>     
                )})} 
            </Slider> 

         


                  {/* <Slider className='testimonial-L' {...settings}>
                  {LeftTestimonials.map((data,id)=>{
                    return (
                    <div key={id} className='swiper-client-msg'>
                      <img className='left' src={L} alt="R" />
                        <p>{data.testimonial}</p>
                      <img src={R} className="right" alt="L" />
                      
                      <hr className='testimonial-hr'/>
    
                      <div className='client-data-details'>
                        {data.star}
                        <h5>{data.client}</h5>
                        <p>{data.date}</p>
                      </div>
                      </div>
                     )})}             
                  </Slider> */}
                
          </div> 
              
                




          <div className="testimonials-right">
          {/*
             
             <div className="testimonial-R">
 
               {RightTestimonials.map((data,id)=>{
                 return (
 
                 <div key={id} className='swiper-client-msg'>
                   <img className='left' src={L} alt="R" />
                     <p>{data.testimonial}</p>
                   <img src={R} className="right" alt="L" />
                   
                   <hr className='testimonial-hr'/>
 
                   <div className='client-data-details'>
                     {data.star}
                     <h5>{data.client}</h5>
                     <p>{data.date}</p>
                   </div>
                   </div>
                 )})} 
             
             </div>*/}



              <Slider className='testimonial-R' {...settings}>
                  {RightTestimonials.map((data)=>{
                    return (
                   <>
                    <div key={data.id} className='swiper-client-msg'>
                      <img className='left' src={L} alt="R" />
                        <p>{data.testimonial}</p>
                      <img src={R} className="right" alt="L" />
                      
                      <hr className='testimonial-hr'/>
    
                      <div className='client-data-details'>
                        {data.star}
                        <h5>{data.client}</h5>
                        <p>{data.date}</p>
                      </div>
                      </div>
                   </>   
                     )})}             
                </Slider>   
           </div>
   
              </div>
    </div>
  )
}

export default Testimonials;
