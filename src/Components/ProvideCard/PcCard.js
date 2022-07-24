import React from "react";
import PropTypes from "prop-types";
import "../ProvideCard/ProvideCard.css";
import Shieldp from "../ProvideCard/proImg/shield.svg"

const PcCard = (props) => {
  return (
    <>
     <div className="col-sm-6 col-md-6 col-lg-2 col-12 mx-auto ">
            <div class="card provide-card">
           <div id="provideimg"> <img className="pcimg" src={props.image}/></div>
  <div class="card-body">
  
    <h5 class="card-title provide-title">{props.title}</h5>
  </div>
</div>
</div>
    </>
  );
};

export default PcCard;

PcCard.prototype = {
  title: PropTypes.string.isRequired,
  
};

PcCard.defaultProps = {
  title: "Title here",
  image: {Shieldp},
};
