import React from "react";
import PropTypes from "prop-types";
import "../Compose/Compose.css";

const ComposeCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-2 col-12 mx-auto ">
            
            <h5 className="compose-title"><span className="spanpadd"><i className="fa-solid fa-circle-check icon-compose"/></span>{props.title}</h5>
  
</div>
    </>
  );
};

export default ComposeCard;

ComposeCard.prototype = {
  title: PropTypes.string.isRequired,
 
};

ComposeCard.defaultProps = {
  title: "Title here",
  
};
