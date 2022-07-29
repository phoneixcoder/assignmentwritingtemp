import React from "react";
import './Coupon.css'
import tick from "../../assets/Coupon/tick.svg"
import sissor from "../../assets/Coupon/sissor.svg"
const Coupon = () => {
  return (
    <>
      <div className="coupon-discount-card">
        <div className="coupon-discount-text">
          <div className="coupon-discount-text--content">
            <img src={tick} alt=""/>
            <h3>Dedication</h3>
          </div>
          <div className="coupon-discount-text--content">
            <img src={tick} alt=""/>
            <h3>All time availability</h3>
          </div>
          <div className="coupon-discount-text--content">
            <img src={tick} alt=""/>
            <h3>Plagarism Free work</h3>
          </div>
          <div className="coupon-discount-text--content">
            <img src={tick} alt=""/>
            <h3>Citations Accuracy</h3>
          </div>
          <div className="coupon-discount-text--content">
            <img src={tick} alt=""/>
            <h3>Perfect Timing</h3>
          </div>
        </div>
        <div className="coupon-border">
            <img src={sissor} alt="" />
        </div>
        <div className="coupon-discount-detail">
            <h3>Get Upto</h3>
            <h1>50% Off</h1>
            <h3>On your first assignment!</h3>
            <div className="coupon-code-container">
                <div className="coupon-code--text">
                    <h2>FIRST50</h2>
                </div>
                <div className="coupon-code--copy">
                    <p>Click to copy</p>
                </div>
            </div>
        </div>
        {/* <div className="circle"></div> */}
      </div>
    </>
  );
};

export default Coupon;
