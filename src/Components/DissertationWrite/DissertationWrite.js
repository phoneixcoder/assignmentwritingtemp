import React from "react";
import "../DissertationWrite/DissertationWrite.css";
import DissertationCard from "./DissertationCard";
import Auth from "../CodeWonder/WonderImg/authentic.svg"
import Badge from "../CodeWonder/WonderImg/badge.svg"
import Head from "../CodeWonder/WonderImg/headphone.svg"
import Timer from "../CodeWonder/WonderImg/timer.svg"

const DissertationWrite = () => {
  return (
    <>
      <div className="container-fluid bckcolor">

      <div className="my-5 col-8 mx-auto">
          <h4 className="text-center dissertation_head ">
          Benefits of our services
          </h4>
        </div>

      <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <p className="serParat">
              The writing of a dissertation for doctoral students comes with its own unique set of difficulties. Getting their dissertation accepted by university officials, is one of the difficulties they face.
As a result, some doctorate candidates enlist the help of experienced writers and editors to complete the final modifications. The dissertation writing services offered by these writers are used by other people as well.
Every student wants to finish with a well-written paper, but the specific reasons for each action vary from one to the next in the class.

              </p>
            </div>
          </div>
        </div>
        <div className="my-5 col-8 mx-auto">
          <h3 className="text-center codewonder-head ">
          The benefits of hiring a Dissertation Writing Service are as follows:
          </h3>
        </div>

       

        <div className="container-fluid ">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
                
              <DissertationCard
                  title="High Quality Dissertaiton"
                  image={Badge}
                />
                <DissertationCard
                  title="Competitive Speed"
                  image={Timer}
                />
                <DissertationCard
                  title="100% Authenticity"
                  image={Auth}
                />
                <DissertationCard
                  title="Relentless Support"
                  image={Head}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DissertationWrite;
