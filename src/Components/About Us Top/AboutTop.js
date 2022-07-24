import React from "react";
import "../About Us Top/AboutTop.css";
import About from "../About Us Top/AboutImg/About Us.svg";
import Service from "../About Us Top/AboutImg/Our Services.svg";
import Shield from "../About Us Top/AboutImg/Secured.svg";
import Target from "../About Us Top/AboutImg/Target.svg";
import Hand from "../About Us Top/AboutImg/Handshake.svg";
import Quality from "../About Us Top/AboutImg/Quality Badge.svg";
import AboutCard from "./AboutCard";
import SerColumn from "./SerColumn";

const AboutTop = () => {
  return (
    <>
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="my-5 container header_containerabout ">
            <h3 className="text-center headService">About Us</h3>
            <img src={About} className="Aboutcard-heading--background" alt="..." />
          </div>

          <div className="container-fluid  ">
            <div className="row">
              <div className="col-10 mx-auto">
                <h4 className="aboutH21">What Do We Do?</h4>
                <p className="abPara2">
                  At Assignment Writing Services, we provide any writing
                  assignment help that you may need for school, college, or
                  work.
                  <br />
                  Live your life, relax or utilise your time to work on
                  something else without stressing about your homework or
                  assignments. We’ll do it for you!
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid secondpadding  ">
            <div className="row">
              <div className="col-10 mx-auto">
                <h4 className="aboutH2">Our Principles</h4>
                <p className="abPara2">
                  Education is about curiosity, passion, insight, and knowledge.
                  We believe that students should get to prioritize and select
                  what adds value to their life and learn about that. <br />
                  <br />
                  At Assignment Writing Services, our team of writers is here to
                  give you the chance to learn for fun and fulfil your passions
                  while they help you write your papers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <AboutCard
                  image={Hand}
                  title="Student Friendly"
                  para="We provide 24/7 customer service to our clients for help with any query they might have"
                />
                <AboutCard
                  image={Shield}
                  title="Privacy"
                  para="Security and confidentiality of clients’ personal information are essential, and we take apt measures to protect it."
                />
                <AboutCard
                  image={Quality}
                  title="Quality"
                  para="Quality is vital for every piece of work we do. Our writers double-check everything to give you the best essay writing service."
                />
                <AboutCard
                  image={Target}
                  title="Success"
                  para="We believe in a results-oriented approach and guarantee timely delivery."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-5 container header_ser_container ">
          <h3 className="text-center headService">Our Services</h3>
          <img
            src={Service}
            className="Aboutcard-Sheading--background"
            alt="..."
          />
        </div>
      </div>

      <div className="container-fluid about-padd ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <SerColumn
                title="Writing Services"
                para="At Assignment Writing Services, we have a team of professional writers with expertise in various subjects to help you write assignments in any discipline. Whether it be homework, essay, report, dissertation, or any other paper you need help with, our assignment helpers can write a brilliant paper for you from scratch. "
              />

              <SerColumn
                title="Editing Services"
                para="Apart from writing help, we also provide an assignment editing service. Our experts will proofread and edit any paper and correct the syntactic or grammatical mistakes to make your writing 100% error-free."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTop;
