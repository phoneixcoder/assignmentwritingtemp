import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination,Autoplay,Navigation} from "swiper";
import "./Pcard.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Pc = (props) => {
  return (
    <>
       
                    
                    <div className='swiper-client-msg1'>
                      <img  className='image' src={props.image} alt="R" />
                      <h2>{props.name}</h2>
                      <h3>{props.position}</h3>
                      <span className="rating">{props.rating}</span><br/>
                      <span className="review">{props.review+ " Reviews"}</span>
                      
                     

                    <div className='client-data-details1'>
                        <p>{props.experience + " Years Experience"}
                          <br/>
                          {props.projects + " Projects Completed"}
                          <br/>
                          {props.citations + " Citations"}
                        </p>
                        
                    </div>
                    </div>
                    
                    
    </>
  );
};

export default Pc;

// Pc.prototype = {
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
// };

// Pc.defaultProps = {
//   title: "Title here",
//   icon: "fa-solid fa-ribbon",
// };
