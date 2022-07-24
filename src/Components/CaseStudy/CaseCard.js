import React from "react";
import PropTypes from 'prop-types';
import "../CaseStudy/CaseStudy.css";


const CaseCard=(props)=>{

    return(
    <>
    
    
                
    
                
    
    <div className="col-md-6 col-lg-6 col-10 mx-auto ">
            <div className="card Smain-card9">
  <div className="card-body">
    <h5 className="card-title Smain-title9">{props.title}</h5>
    <p className="card-paraS9">{props.para}</p>
  </div>
</div>
</div>
                
    
    
    
    
    
    
    </>
    
    );
    
    };
    
    export default CaseCard;
    
    
    CaseCard.prototype= {
        
        title: PropTypes.string.isRequired, 
        para: PropTypes.string.isRequired, 
    };
    
    CaseCard.defaultProps = {
        
        title: "Title here", 
        para: "Para here", 
        
    };