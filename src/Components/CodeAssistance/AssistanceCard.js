import React from "react";
import PropTypes from 'prop-types';
import "../CodeAssistance/CodeAssistance.css";



const AssistanceCard=(props)=>{

    return(
    <>
    
    
    <div className="col-md-6 col-lg-4 col-10 mx-auto ">
            <div className="card codeassis-card">
            <div id="assiscode"><img className="kkk" src={props.image}/></div>
  <div className="card-body">
    <h5 className="card-title codeassis-title">{props.title}</h5>
  </div>
</div>
</div>
                
    
    
    
    
    
    
    </>
    
    );
    
    };
    
    export default AssistanceCard;
    
    
    AssistanceCard.prototype= {
        
        title: PropTypes.string.isRequired, 
       
    };
    
    AssistanceCard.defaultProps = {
        
        title: "Title here", 
         
        
    };