import React from "react";
import "./hero.css";
import PropTypes from "prop-types";
const Hero = (props) => {
  const Herostyle = {
    backgroundImage: `url(${props.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "100%",
    height: "100vh",
  };
  return (
    <>
      <div className="hero" style={Herostyle}>
        <div className="hero-text">
          <h1 className="hero-text--heading">
            {props.normalText1}{" "}
            <span className="grad-span">{props.highlightedText1}</span>{" "}
            {props.normalText2}{" "}
            {props.normalText3}
          </h1>
          <h2 className="hero-text--subtitle">
            {props.normalText4}{" "}
            <span className="grad-span extra-bold">
              {props.highlightedText3}
            </span>{" "}
            {props.normalText5}
          </h2>
          <button className="get-a-quote">{props.buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
Hero.prototype = {
  normalText1: PropTypes.string.isRequired,
  normalText2: PropTypes.string.isRequired,
  normalText3: PropTypes.string.isRequired,
  normalText4: PropTypes.string.isRequired,
  normalText5: PropTypes.string.isRequired,
  highlightedText1: PropTypes.string.isRequired,
  highlightedText3: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  normalText1: "Set Title",
  normalText2: "Set Title",
  normalText3: "Set Title",
  normalText4: "Set Title",
  normalText5: "Set Title",
  highlightedText1: "Set Title",
  highlightedText3: "Set Title",
  buttonText: "set button",
};
