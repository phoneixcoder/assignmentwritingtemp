import React from "react";
import "./ConfusedCard.css";
const ConfusedCard = () => {
  return (
    <>
      <div className="confused-card-container">
        <div className="confused-card-heading">
          <h1 className="confused-card-heading--text">Confused? Indecisive?</h1>
        </div>
        <div className="confused-card-details">
          <p className="confused-card-details--text">
            Should you take this service? What to do next? Don’t think, just
            book your free consultation now. Free Consultation with our Expert
            Counsellor/Consultant. Ask all your doubts without fear, and
            completely. We want to ensure that at each step, you have great
            clarity.
          </p>
        </div>
        <div className="confused-card-button-container">
            <button className="confused-card-button">Book Free Consultation</button>
        </div>
      </div>
    </>
  );
};

export default ConfusedCard;
