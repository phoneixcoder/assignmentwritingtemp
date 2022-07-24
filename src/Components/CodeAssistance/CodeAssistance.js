import React from "react";
import "../CodeAssistance/CodeAssistance.css";
import And from "../CodeAssistance/codeAssisImg/android.svg";
import App from "../CodeAssistance/codeAssisImg/app dev.svg";
import Cloud from "../CodeAssistance/codeAssisImg/cloud.svg";
import Java from "../CodeAssistance/codeAssisImg/java.svg";
import Mat from "../CodeAssistance/codeAssisImg/matlab 1.svg";
import Real from "../CodeAssistance/codeAssisImg/realAndroid.svg";
import AssistanceCard from "./AssistanceCard";



const CodeAssistance=()=>{

    return(
        <>

<div className="container-fluid codebck">
        <div className="my-5 col-6 mx-auto">
        <h3 className="text-center codeassis-head ">When it comes to programming assistance,<br/>
we offer expertise in all aspects of programming.</h3>
        
      </div>



            <div className="container-fluid ">
        <div className="row">
          <div className="col-6 mx-auto">
            <div className="row gy-4">
            

            <AssistanceCard
            image={And}
            title="Building Website"
            />
            <AssistanceCard
            image={Real}
            title="IOS- App Development"
            />
            <AssistanceCard
            image={Cloud}
            title="Cloud Network"
            />
            <AssistanceCard
            image={Java}
            title="JAVA Program"
            />
            <AssistanceCard
            image={Mat}
            title="MATLAB"
            />
            <AssistanceCard
            image={App}
            title="Android App Development"
            />




</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};



 export default CodeAssistance;