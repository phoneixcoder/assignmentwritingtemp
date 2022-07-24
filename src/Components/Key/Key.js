import React from "react";
import KeyCard from "./KeyCard";
import plagiarism from "../../assets/Key/plagiarism.svg";
import availability from "../../assets/Key/availability.svg";
import easy from "../../assets/Key/easy.svg";
import expert from "../../assets/Key/expert.svg";
import quality from "../../assets/Key/quality.svg";
import features from "../../assets/Key/features.svg";
import arc from "../../assets/Key/arc.svg";
import "./Key.css";
import ConfusedCard from "./ConfusedCard.js";
const Key = () => {
  return (
    <>
      <div className="key-features">
        <div className="features--heading">
          <h1 className="features--heading--text">Key Features</h1>
          <img
            src={features}
            alt=""
            className="features--heading--background"
          />
        </div>
        <div className="features-cards">
          <img src={arc} alt="" className="arc" />
          <div className="card-container1">
            <KeyCard
              source={plagiarism}
              firstText="Plagiarism"
              secondText="Checker"
              keyDetails="Every work finished from our end will have a Plagiarism Report. It will indicate the level of freshness of your work"
            />
          </div>
          <div className="card-container2">
            <KeyCard
              source={easy}
              firstText="Easy"
              secondText="Pay"
              keyDetails="Assignment Writing Service offers payment solutions that are easy, convenient and hassle free."
            />
          </div>
          <div className="card-container3">
            <KeyCard
              source={quality}
              firstText="Best "
              secondText="Qualtiy"
              keyDetails="Quality is what we are driven to provide. Our Assignments go through many steps of quality check."
            />
          </div>
          <div className="card-container4">
            <KeyCard
              source={availability}
              firstText="24/7"
              secondText="Availability"
              keyDetails="Our team of experts at Assignment Writing Service are available throughout day and night. We want students to not be left unanswered"
            />
          </div>
          <div className="card-container5">
            <KeyCard
              source={expert}
              firstText="Expert"
              secondText="Writers"
              keyDetails="Assignment Writing Service stands to hire best experts who can help you gain a greater edge in your University Assignments."
            />
          </div>
        </div>
        <ConfusedCard />
      </div>
    </>
  );
};

export default Key;
