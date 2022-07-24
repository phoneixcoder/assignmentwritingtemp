import React from 'react'
import "./Procedurecard.css"
const Procedurecard = (props) => {
  return (
    <>
        <div className="procedurecard">
                <h1 className="step-num--text">{props.stepNum}</h1>
                <h1 className="step-des--text">{props.stepDes}</h1>
                <p className="step-para--text">{props.stepPara}</p>
        </div>
    </>

  )
}

export default Procedurecard