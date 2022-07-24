import React from "react";
import PropTypes from 'prop-types';
import "../ResearchTypes/ResearchTypes.css"
import Shield from "../About Us Top/AboutImg/Secured.svg"

const RCard=(props)=>{

return(
<>


            

            

<div className="col-sm-10 col-md-5 col-lg-5 col-10 mx-auto ">
            <div className="re-card">
                
  <div className="card-body right_div5">
    <h5 className="card-title about-title5">{props.title}</h5>
    <p className="about-para5">{props.para}</p>
  </div>
</div>
</div>
            






</>

);

};

export default RCard;


RCard.prototype= {
    
    title: PropTypes.string.isRequired, 
    para: PropTypes.string.isRequired, 
};

RCard.defaultProps = {
    image: {Shield}, 
    title: "Title here", 
    para: "Para here", 
    
};

