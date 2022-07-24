import React from "react";
import "../Compose/Compose.css";
import ComposeCard from "./ComposeCard";



const Compose=()=>{

    return(
        <>

<div className="container-fluid bckcolor">
        <div className="my-5 col-8 mx-auto">
        <h3 className="text-center provide-head ">Need some assistance in composing your programming assignment?</h3>
        
      </div>

      <div className="container-fluid  ">
        <div className="row">
          <div className="col-10 mx-auto">
            <p className="serPara7">
            A computer program is a collection of instructions that are run on a computer to accomplish a certain goal. It was written by a team of programmers. It is the act of giving machines a set of instructions that specify how to carry out a program.<br/><br/>
 
 There are a lot of different programming languages and tools that programmers will need to learn over their careers to write efficient computer applications. Programming is an exercise or practice that enhances our ability to think logically and solve problems. Using a computer program or software, it teaches us how to execute a task. As a result, to put it simply, programming is the process of using computer language to construct a solution to a problem.<br/><br/>
  
 
 Writing and running a computer program to solve a problem is a requirement for programming assignments. Some programming assignments contribute toward your final grade, while others are simply for your personal growth and development.
  Programming assignments are designed to help students learn how to write programs that include principles learned in class. As a result, unless otherwise specified, programming assignments must be completed individually (e.g., a team project).
 
            </p>

            <h6 className="short-head7">We lend professional prgramming assistance in:</h6>
            </div>
            </div>
            </div>


            <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3">
            

           <ComposeCard
           title="Java"
           />
           <ComposeCard
           title="C / C++"
           />
           <ComposeCard
           title="Python"
           />
           <ComposeCard
           title="ASP.Net"
           />
           <ComposeCard
           title="Ruby"
           />
           <ComposeCard
           title="Pascal"
           />
           <ComposeCard
           title="C#"
           />
           <ComposeCard
           title="MySQL"
           />
           <ComposeCard
           title="MathCAD"
           />
           <ComposeCard
           title="Oracle"
           />
           <ComposeCard
           title="Dot Net"
           />
           <ComposeCard
           title="Adobe Flash"
           />
           <ComposeCard
           title="Database"
           />



</div>
              </div>
            </div>
          </div>



        </div>
        </>
    
    );
};




 export default Compose;