import React from "react";

import "../ProvideCard/ProvideCard.css";
import PcCard from "./PcCard.js";
import Web from "../ProvideCard/proImg/shield.svg"

const ProvideCard = () => {
  return (
    <>
      <div className="container-fluid bckcolor">
        <div className="my-5 col-8 mx-auto">
          <h3 className="text-center provide-head ">
            How Do We Help With Writing Your Essays?
          </h3>
        </div>

        <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <p className="serPara">
                Online essay writing services generally ask for your
                instructions and assign you a writing helper with hardly any
                communication between you. We feel this is not a good strategy
                for producing top-quality assignments meeting the client's
                needs.
                <br />
                <br />
                We believe in a more engaging assignment help method where we
                maintain a communication channel with you throughout the writing
                process. This guarantees that your needs are regularly
                addressed, and your essay helper can make changes according to
                your suggestions at every step to make optimum use of the
                service you have paid for.
              </p>

              <h6 className="short-head">We provide you with:</h6>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <PcCard
                  image={Web}
                  title="Dedication"
                />
                <PcCard
                 image={Web}
                  title="All Time Availability"
                />
                <PcCard
                  image={Web}
                  title="Plagiarism Free Work"
                />
                <PcCard
                  image={Web}
                  title="Citations Accuracy"
                />
                <PcCard
                  image={Web}
                  title="Perfect Timing"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvideCard;
