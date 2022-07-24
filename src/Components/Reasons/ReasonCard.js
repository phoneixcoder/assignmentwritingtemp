import React from 'react'
import './reasonCard.css'

const ReasonCard = (props) => {
  return (
    <>
      <div className="reason-card">
        <div className="reason-card-header">
          <p className='card-count-nummber'>{props.number}</p>
          <h1 className="card-heading-text">{props.heading}</h1>
        </div>
        <div className="card-text">
            <p className="card-para-text">{props.detail}</p>
        </div>
      </div>          
    </>
  )
}

export default ReasonCard
