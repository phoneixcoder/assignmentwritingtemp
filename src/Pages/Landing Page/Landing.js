import React from "react";
import Coupon from "../../Components/CouponCard/Coupon";
import "./Landing.css";
import LandingForm from "./LandingForm";
import LandingHero from "./LandingHero";
const Landing = () => {
  return (
    <>
      <div className="landing1">
        <LandingHero landingFirst = "Premium" landingHighlight = ""/>
        <Coupon/>
        <LandingForm/>
      </div>
    </>
  );
};

export default Landing;
