import React from "react";
import PropTypes from 'prop-types';
import "../DissNeed/DisNeed.css";


const DissCard=(props)=>{

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
    
    export default DissCard;
    
    
    DissCard.prototype= {
        
        title: PropTypes.string.isRequired, 
        para: PropTypes.string.isRequired, 
    };
    
    DissCard.defaultProps = {
        
        title: "Title here", 
        para: "Para here", 
        
    };