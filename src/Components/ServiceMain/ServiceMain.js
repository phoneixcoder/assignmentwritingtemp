import React from "react";
// import Service from "../ServiceMain/ServiceAssets/Services.svg";
import Service from "./ServiceAssests/Services.svg"
import "../ServiceMain/ServiceMain.css";
import SmainCard from "./ServiceMainCard";

const ServiceMain = () => {
  return (
    <>
      <section id="header" className="service--outerbox">
        <div className="service-main">
          <div className="service-heading1--container">
            <h1 className="service-heading1--text">Services We Provide</h1>
            <img
              src={Service}
              className="service-heading1--background"
              alt=""
            />
          </div>

          <div className="service--imgParaBox">
            <div className="service-main-text-container">
              <div className="brand-names">
                <h1 className="brand-names--heading">
                  One-Stop Solution For All Your Assignment Needs
                </h1>
              </div>
              <div className="service-main-text-para-container">
                <h6 className="service-main-text--para">
                Our goal is to provide specialized and tailored service to our students who struggle with university assignments.We offer a range of services in the three main categories, which are Assignment Assistance, Assignment Writing, and Assignment Editing.
                <br />
                <br />
                We promise professional work and timely delivery of our Assignment Services.
                </h6>
              </div>
            </div>
            <div className="service--header--img">
              {/* <img src={Web} className=" laptopImg " alt="laptop" /> */}
            </div>
          </div>
        </div> 

        <div className="service--container">
            <SmainCard
              title="Assignment Writing Service"
              para="Reports play an important role in marks and assessments.  With our Report Writing Service, we ensure you get the best grades possible. "
            />
            <SmainCard
              title="Essay Writing Services"
              para="We offer Essays in various fields, as well as, various domains. We ensure Essays are well suited to the needs of the university."
            />
            <SmainCard
              title="Dissertation Writing Service"
              para="Experts from our side ensure that students get Quality, over Quantity. Dissertation Writing Service provides the best fit for research work."
            />
            <SmainCard
              title="Research Paper Writing Services"
              para="Research papers are great when they are cited more. At  Assignment Writing Services, we provide Research Paper Writing to fulfill that need."
            />
            <SmainCard
              title="Course-work Writing Service"
              para="Daily, Weekly, Monthly, Quarterly, Half-Yearly, Yearly, and many more. We provide the solution for all types, provided by universities."
            />
            <SmainCard
              title="Computer program Writing Service"
              para="Leave Application, Job Application, Internship Application, Penalty Application, Issue Application etc. All at a Token Rate!"
            />
            <SmainCard
              title="Case-Study Writing Service"
              para="With a new wave of startups and campus events, we are there to help you. Startup scripting, pitch deck, event writing service, LOR, SOP, Resume etc."
            />
            <SmainCard
              title="Partner Writing Service"
              para="Join our creative channel and partner with us as a campus ambassador. We provide this opportunity for you to make a difference. A real WIN/WIN!"
            />
        </div>
      </section>
    </>
  );
};

export default ServiceMain;
