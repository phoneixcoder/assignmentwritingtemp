import React from "react";
import "../CodeWonder/CodeWonder.css";
import WonderCard from "./WonderCard";
import Auth from "../CodeWonder/WonderImg/authentic.svg"
import Badge from "../CodeWonder/WonderImg/badge.svg"
import Head from "../CodeWonder/WonderImg/headphone.svg"
import Timer from "../CodeWonder/WonderImg/timer.svg"

const CodeWonder = () => {
  return (
    <>
      <div className="container-fluid bckcolor">
        <div className="my-5 col-8 mx-auto">
          <h3 className="text-center codewonder-head ">
            Wondering why we are considered the No.1 programming assistance
            providing service in the industry?
          </h3>
        </div>

        <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <p className="serPara">
                When trying to find an expert to work on your dissertation
                projects, the first challenge to overcome is, who do you trust?
                Many companies offer online dissertation buying services, but
                only a handful can guarantee you a top-quality dissertation
                paper. Assignment Writing Services is one of the best
                dissertation writing service in UK.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-4">
                <WonderCard
                  title="High Quality Dissertaiton"
                  image={Badge}
                />
                <WonderCard
                  title="Competitive Speed"
                  image={Timer}
                />
                <WonderCard
                  title="100% Authenticity"
                  image={Auth}
                />
                <WonderCard
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

export default CodeWonder;
