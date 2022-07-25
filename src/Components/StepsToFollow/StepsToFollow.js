import React, { useState, useEffect } from "react";
import one from "../../assets/StepsToFollow/01.svg";
import two from "../../assets/StepsToFollow/02.svg";
import three from "../../assets/StepsToFollow/03.svg";
import four from "../../assets/StepsToFollow/04.svg";
import five from "../../assets/StepsToFollow/05.svg";
import six from "../../assets/StepsToFollow/06.svg";
// import header from "../../assets/StepsToFollow/Header.png";
import header from "../../assets/StepsToFollow/header.svg";
import "./StepToFollow.scss";
// import ProgressBar from './ProgressBar';

const steps = [
  {
    id: 1,
    title: "Fill up the Quote",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: one,
  },
  {
    id: 2,
    title: "Get A Free Consultant",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: two,
  },
  {
    id: 3,
    title: "Know About Our Services",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: three,
  },
  {
    id: 4,
    title: "Assign Us The Task",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: four,
  },
  {
    id: 5,
    title: "Assignment Delivery",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: five,
  },
  {
    id: 6,
    title: "Share Your Feedback",
    desc: "Take your time and ask all doubts you have. We want you to have clarity over what we offer.",
    img: six,
  },
];

const StepsToFollow = () => {
  const [index, setIndex] = useState(0);

  const [progressValue, setProgressValue] = useState(0);
  const progressEndVlaue = 1800;

  useEffect(() => {
    const nextIndex = () => setIndex((i) => i + 1);
    const id = setInterval(nextIndex, 3000);
    // return () => ;

    let valueContainer = document.querySelector(".value-container");
    let progressInterval = setInterval(() => {
      setProgressValue((pv) => pv + 1);
      valueContainer.textContent = `${progressValue}%`;
    }, 10);
    return () => {
      clearInterval(id);
      clearInterval(progressInterval);
    };
  }, []);

  const content = steps[index % steps.length];

  let f = () => {
    if (progressValue > 0) {
      let progressBar = document.querySelector(".circular-progress");
      progressBar.style.background = `conic-gradient(
        #EAF3F9 ${progressValue * 0.2}deg,
        #091115 ${progressValue * 0.2}deg
        )`;
    }
    if (progressValue >= progressEndVlaue) {
      setProgressValue(0);
      // clearInterval(progressInterval);
    }
  };

  const ProgressBar = () => {
    return (
      <div className="circular-progress">
        <div className="value-container">0%</div>
        {f()}
      </div>
    );
  };

  return (
    <div className="steps-container">
      <div className="heading">
        <h1>Steps to Follow</h1>
        <img src={header} alt="header" className="stepsToFollow-bg-header" />
      </div>

      <div className="circular-container">
        <div className="outer-circle">
          {ProgressBar()}

          {/* CHANGING STEPS NUMBER AND DESCRIPTION IN MIDDLE START */}
          <div id="step-number">
            <div className="content">
              <div className="header">
                <h3>Know about our Services</h3>
                {/* <p>{content.title}</p> */}
              </div>
              <p>{content.desc}</p>
            </div>
          </div>
          {/* CHANGING STEPS NUMBER AND DESCRIPTION IN MIDDLE END */}

          {/* CARDS DISPLAY START */}

          <ul className="inner-circle">
            {steps.map((data, id) => {
              return (
                <li key={id}>
                  <div className="cards">
                    <div className="box">
                      <div className="content">
                        <img src={data.img} alt="img2" className="step-icon" />
                        <p>{data.title}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}

            {/* <li>
            <div className="cards">
                 <div className="box">
                    <div className="content">
                      <img src={two} alt="img2" className='step-icon'/> 
                      <p>Get A Free Consultant</p>
                    </div>
                 </div>
            </div>
          </li>
          

          <li>
          <div className="cards">
                  <div className="box">
                    <div className="content">
                        <img src={three} alt="img3" className='step-icon'/> 
                      <p>Know About Our Services</p>
                    </div>
                  </div>
                </div>
                
          </li>
          
          <li>
          <div className="cards">
                  <div className="box">
                    <div className="content">
                        <img src={four} alt="img4" className='step-icon'/> 
                      <p>Assign Us The Task</p>
                    </div>
                  </div>
                </div>
          </li>
          
          <li>
          <div className="cards">
                  <div className="box">
                    <div className="content">
                        <img src={five} alt="img5" className='step-icon'/> 
                      <p>Assignment Delivery</p>
                    </div>
                  </div>
                </div>
          </li>
          
          <li>
          <div className="cards">
                  <div className="box">
                    <div className="content">
                        <img src={six} alt="img6" className='step-icon'/> 
                      <p>Share Your Feedback</p>
                    </div>
                  </div>
                </div>
          </li> */}
          </ul>

          {/* CARDS DISPLAY END */}
        </div>
      </div>
    </div>
  );
};

export default StepsToFollow;
