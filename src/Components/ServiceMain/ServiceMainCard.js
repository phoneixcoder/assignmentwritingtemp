import React from "react";
import PropTypes from "prop-types";
import "../ServiceMain/ServiceMain.css";
import "./ServiceMainCard.css";
import line from "./ServiceAssests/line.svg";
const SmainCard = (props) => {
  return (
    <>
      <div className="service-card-container">
        <div className="img-line-container">
          <img src={line} alt="" className="line-img" />
        </div>
        <div className="serviceCard-body">
          <h5 className="serviceCard-body-title">{props.title}</h5>
          <p className="serviceCard-body-para">{props.para}</p>
        </div>
      </div>
    </>
  );
};

export default SmainCard;

SmainCard.prototype = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

SmainCard.defaultProps = {
  title: "Title here",
  para: "Para here",
};
