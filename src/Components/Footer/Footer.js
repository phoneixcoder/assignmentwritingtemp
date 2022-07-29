

import React from "react";
import footerLogo from "../../assets/Footer/footerLogo.png";
import Email from "../../assets/Footer/email.png";
import Phone from "../../assets/Footer/phone.png";
import whatsapp from "../../assets/Footer/whatsapp.png";
import instagram from "../../assets/Footer/instagram.png";
import facebook from "../../assets/Footer/facebook.png";
import linkedin from "../../assets/Footer/linkedin.png";
import stripe from "../../assets/Footer/stripe.png";
import paypal from "../../assets/Footer/paypal.png";
import razorpay from "../../assets/Footer/razorpay.png";
import line from "../../assets/Footer/line.svg";
import "./Footer.css";

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={footerLogo} className="footer-img" alt="" />
          <p className="footer-about-desc">
            Assignment Writing Service is deeply committed to making sure that
            we make a difference in the world. We guarantee that your
            assignments will not be stressful and that you will get excellent
            grades as a result. All of our products and services are of the
            utmost quality and efficiency for your reference.
          </p>
        </div>

        <div className="Register_a">
          <div className="footer-heading">
            <img src={line} alt="" className="footer-line" />
            <h2>Quick Links</h2>
          </div>
          <ul>
            <li>
              <a href="/page404">About Us</a>
            </li>
            <li>
              <a href="/page404">Order Now</a>
            </li>
            <li>
              <a href="/page404">Blogs</a>
            </li>
            <li>
              <a href="/page404">Writers</a>
            </li>
            <li>
              <a href="/page404">Writing Tools</a>
            </li>
            <li>
              <a href="/page404">Reviews</a>
            </li>
          </ul>
        </div>

        <div className="Register_a">
          <div className="footer-heading">
            <img src={line} alt="" className="footer-line" />
            <h2>Supports</h2>
          </div>
          <ul>
            <li>
              <a href="/page404">FAQs</a>
            </li>
            <li>
              <a href="/page404">Policies</a>
            </li>
            <li>
              <a href="/page404">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="Register_a">
          <div className="footer-heading">
            <img src={line} alt="" className="footer-line" />
            <h2>Get In Touch</h2>
          </div>
          <ul>
            <li>
              <a href="/page404">
                <img src={Email} className="icon" alt="email" /> Email Us
              </a>
            </li>
            <li>
              <a href="/page404">
                <img src={Phone} className="icon" alt="email" /> Call Us
              </a>
            </li>
          </ul>

          <div className="socials">
            <a href="https://whatsapp.com">
              <img src={whatsapp} className="social-icon" alt="whatsapp" />
            </a>
            <a href="https://facebook.com">
              <img src={facebook} className="social-icon" alt="whatsapp" />
            </a>
            <a href="https://instagram.com">
              <img src={instagram} className="social-icon" alt="whatsapp" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedin} className="social-icon" alt="whatsapp" />
            </a>
          </div>
          <div className="payment">
            <h2 className="payment-heading">Payment Partners</h2>
            <div className="payment-partner">
              <img src={stripe} alt="" className="paymnet-partner-img" />
              <img src={paypal} alt="" className="paymnet-partner-img" />
              <img src={razorpay} alt="" className="paymnet-partner-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer_info">
        <hr className="hr" />

        <div className="footer-box">
          <p>
            Copyright &#169;
            {/* <em> {year} </em> */}
            <a href="https://www.assignmentcure.com/">Assignment Cure. </a>
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;