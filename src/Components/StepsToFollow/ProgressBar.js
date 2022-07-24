import React, { useState, useEffect } from "react";
import "./StepToFollow.scss";
import CircularProgress from "@mui/material/CircularProgress";

const ProgressBar = () => {
  // const [progressValue,setProgressValue] =useState(0);

  //     let progressBar = document.querySelector(".circular-progress");
  //     const progress = setInterval(()=>{
  //       setProgressValue(i=>i+1);

  //       progressBar.style.background = `conic-gradient(
  //             #EAF3F9 ${progressValue * 3.6}deg,
  //             #091115 ${progressValue * 3.6}deg
  //       )`;

  //     },3000)
  //     return () => clearInterval(progress && progressValue==100)
  const [progressValue, setProgressValue] = useState(0);
  const progressEndVlaue = 1800;

  useEffect(() => {
    let valueContainer = document.querySelector(".value-container");
    let progressInterval = setInterval(() => {
      
      setProgressValue((pv) => pv + 1);
      valueContainer.textContent = `${progressValue}%`;

    }, 10);
    return () => clearInterval(progressInterval);
  }, []);

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

  let func = () => {
    // console.log(progressValue);
  };

  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  // const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  // }, 1000);

  // return () => {
  //     clearInterval(timer);
  // };
  // }, []);

  return (
    <div className="circular-progress">
      <div className="value-container">0%</div>
      {func()}
      {f()}
    </div>
    // <CircularProgress
    //         className='circular-progress'
    //         variant="determinate"
    //         thickness={1}

    //         value={progress} />
  );
};

export default ProgressBar;
