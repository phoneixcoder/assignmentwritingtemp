import React from "react";
import PropTypes from 'prop-types';
import "../About Us Top/AboutTop.css"


const SerColumn=(props)=>{

    return(
    <>
    
    
                
    
                
    
    <div className="col-md-6 col-lg-6 col-10 mx-auto ">
            <div className="card Ssmain-card">
  <div className="card-body">
    <h5 className="card-title Ssmain-title">{props.title}</h5>
    <p className="card-paraSs">{props.para}</p>
  </div>
</div>
</div>
                
    
    
    
    
    
    
    </>
    
    );
    
    };
    
    export default SerColumn;
    
    
    SerColumn.prototype= {
        
        title: PropTypes.string.isRequired, 
        para: PropTypes.string.isRequired, 
    };
    
    SerColumn.defaultProps = {
        
        title: "Title here", 
        para: "Para here", 
        
    };