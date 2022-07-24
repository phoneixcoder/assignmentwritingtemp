import React from "react";
import PropTypes from 'prop-types';
import "../About Us Top/AboutTop.css"
import Shield from "../About Us Top/AboutImg/Secured.svg"

const AboutCard=(props)=>{

return(
<>


            

            

<div className="col-sm-10 col-md-5 col-lg-5 col-10 mx-auto ">
            <div className="about-card">
                <div className="left_div">
            <img classname="imgcss" src={props.image} alt=""/>
            </div>
  <div className="card-body right_div">
    <h5 className="card-title about-title">{props.title}</h5>
    <p className="about-para">{props.para}</p>
  </div>
</div>
</div>
            






</>

);

};

export default AboutCard;


AboutCard.prototype= {
    
    title: PropTypes.string.isRequired, 
    para: PropTypes.string.isRequired, 
};

AboutCard.defaultProps = {
    image: {Shield}, 
    title: "Title here", 
    para: "Para here", 
    
};

