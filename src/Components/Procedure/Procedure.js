import React, { useState, useEffect } from "react";
import Procedurecard from "./Procedurecard";
import "./Procedure.css";
const Procedure = () => {
  const [fadeProp, setFadeProp] = useState({
    stepNum: "Step - 1",
    stepDes: "Submit your deposit",
    stepPara:
      "After you give us all the details about your assignment, we will generate an invoice for you. Complete your transaction through a very secure payment procedure",
  });
  const data = [
    {
      stepNum: "Step - 1",
      stepDes: "Submit your deposit",
      stepPara:
        "After you give us all the details about your assignment, we will generate an invoice for you. Complete your transaction through a very secure payment procedure",
    },
    {
      stepNum: "Step - 2",
      stepDes: "Submit your deposit",
      stepPara:
        "After you give us all the details about your assignment, we will generate an invoice for you. Complete your transaction through a very secure payment procedure",
    },
    {
      stepNum: "Step - 3",
      stepDes: "Submit your deposit",
      stepPara:
        "After you give us all the details about your assignment, we will generate an invoice for you. Complete your transaction through a very secure payment procedure",
    },
  ];

  const [fillColor, setFillColor] = useState({
      width: "0%"
  });

  useEffect(() => {
    changeData();
    changeColor();
  }, []);

  const changeColor = () => {
    let flag = 0;
    setInterval(() => {
      if (flag === 0) {
        setFillColor({
            width: "50%"
        });
        flag = 1;
      }
      else if(flag === 1){
        setFillColor({
          width: "100%"
        });
        flag = 2;
      }
      else{
        setFillColor({
          width: "0%"
        });
        flag = 0;
      }
    }, 3000);
  }

  const changeData = () => {
    let i = 1;
    setInterval(() => {
      setFadeProp(data[i]);
      if (i < 2) {
        i++;
      } else {
        i = 0;
      }
    }, 3000);
  };

  return (
    <>
      <div className="procedure">
        <div className="procedure-heading">
          <h1 className="procedure-heading--text">
            Simple 3 Steps procedure for placing your order
          </h1>
        </div>

        <div className="procedure-line-container">
          <div className="procedure-line" style={fillColor}></div>
          <div className="step --1">
            <span>1</span>
          </div>
          <div className="step --2">
            <span>2</span>
          </div>
          <div className="step --3">
            <span>3</span>
          </div>
        </div>

        <div className="procedurecard-card-container">
          <Procedurecard
            stepNum={fadeProp.stepNum}
            stepDes={fadeProp.stepDes}
            stepPara={fadeProp.stepPara}
          />
        </div>
      </div>
    </>
  );
};

export default Procedure;
