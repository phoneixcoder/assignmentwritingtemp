import React from "react";
import PropTypes from "prop-types";
import "../Services/Service.css"

const ServiceCard = (props) => {
  return (
       <div className="col-lg-3 col-md-6  col-10 mx-auto ">
                <div className="card carmar Cbox1 ">
                
                  <div className="card-body ">
                <div id="isize1"> <img className="isize2" src={props.image}/></div>
                    <h5 className="card-title ititle">{props.title}</h5>
                    <p className="card-text pc1">
                   {props.para}
                    </p>
                    
                  </div>
                </div>
        </div>
  );
};

export default ServiceCard;

ServiceCard.prototype = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

ServiceCard.defaultProps = {
  title: "Title here",
  para: "Paragraph here",
};
