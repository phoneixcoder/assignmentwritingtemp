import React from "react";
import Coupon from "../../Components/CouponCard/Coupon";
import "./Landing.css";
import LandingForm from "./LandingForm";
const Landing = () => {
  return (
    <>
      <div className="landing1">
        <div className="landing-text">
          <h1 className="landing-text--heading">
            Premium
            <span className="grad-span"> Assignment Writing </span> Service For
            University Students
          </h1>
          <h2 className="landing-text--subtitle">
            Choose Best In Class Assignment Writing Service at just
            <span className="grad-span"> $9.99 </span> 
            a page
          </h2>
        </div>
        <Coupon/>
        <LandingForm/>
      </div>
    </>
  );
};

export default Landing;
