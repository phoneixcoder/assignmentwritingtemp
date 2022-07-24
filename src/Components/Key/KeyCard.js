import React from "react";
import "./KeyCard.css";
import PropTypes from "prop-types";

const KeyCard = (props) => {
  return (
    <>
      <div className="key-card--container">
        <img src={props.source} alt="logo"  className="key-card-img"/>
        <p className="key-card--text">
          {props.firstText}
          <br />
          {props.secondText}
        </p>
        <p className="key-card-details--text">{props.keyDetails}</p>
      </div>
    </>
  );
};

export default KeyCard;
KeyCard.prototype = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

KeyCard.defaultProps = {
  firstText: "Plagiarism",
  secondText: "Checker",
  source: "",
};
