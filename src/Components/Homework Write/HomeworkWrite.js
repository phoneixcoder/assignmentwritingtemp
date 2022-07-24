import React from "react";
import "../Homework Write/HomeworkWrite.css";
import HomeworkCard from "./HomeworkCard";
import Format from "../Homework Write/homework Img/format.svg";
import Head from "../Homework Write/homework Img/headphone.svg";
import People from "../Homework Write/homework Img/people.svg";
import Revision from "../Homework Write/homework Img/revision.svg";
import Round from "../Homework Write/homework Img/round.svg";
import Search from "../Homework Write/homework Img/search.svg";
import Timer from "../Homework Write/homework Img/timer.svg";
import Wallet from "../Homework Write/homework Img/wallet.svg";



const HomeworkWrite=()=>{

    return(
        <>

<div className="container-fluid bckcolor">
        <div className="my-5 ">
        <h3 className="text-center home-head ">Why Should You Use Assignment Writing Services To Help Write Your Assignment?</h3>
        
      </div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-10 mx-auto">
            <p className="serPara">
            We offer homework help for any subject that you need help with. We believe in quality work, and our writers work diligently <br/>to provide you with the same.<br/><br/>Some benefits you get by choosing our assignment writing service Canada for help with your homework are:
            </p>
            </div>
            </div>
            </div>


            <div className="container-fluid ">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row gy-4">
            

           <HomeworkCard
           image={Wallet}
           title="Affordable Prices"
           />
           <HomeworkCard
           image={Search}
           title="Plagiarism-Free Content"
           />
           <HomeworkCard
           image={People}
           title="Proffesional Writers"
           />
           <HomeworkCard
           image={Head}
           title="Customer Support"
           />
           <HomeworkCard
           image={Round}
           title="Free Outline"
           />
           <HomeworkCard
           image={Revision}
           title="Free Revision"
           />
           <HomeworkCard
           image={Format}
           title="Paper Formatting"
           />
           <HomeworkCard
           image={Timer}
           title="Fixed Deadlines"
           />




</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};


 export default HomeworkWrite;