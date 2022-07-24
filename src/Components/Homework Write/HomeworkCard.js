import React from "react";
import PropTypes from "prop-types";
import "../Homework Write/HomeworkWrite.css";

const HomeworkCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-3 col-10 mx-auto ">
            <div className="card homework-card">
            <div id="hwcode"><img className="hwimg" src={props.image}/></div>
  <div className="card-body">
    <h5 className="card-title home-title">{props.title}</h5>
  </div>
</div>
</div>
    </>
  );
};

export default HomeworkCard;

HomeworkCard.prototype = {
  title: PropTypes.string.isRequired,
  
};

HomeworkCard.defaultProps = {
  title: "Title here",
  
};
