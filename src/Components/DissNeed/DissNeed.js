import React from "react";


import "../DissNeed/DisNeed.css";
import DissCard from "./DissCard";

const DissNeed = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center backScolorp">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="subjects-heading1--container9">
        <h1 className="subjects-heading1--text9">Need Help With Your Dessertations?</h1>
        
      </div>

             <div className="paragra">
<p className="pg9">A dissertation is a research project that must be completed as part of an application for an undergraduate or postgraduate degree. In some countries, this term is exclusively used for the last assignments of Doctoral degrees, while in other countries the terms "thesis" and "dissertation" are equivalent. Students are typically given the opportunity to explain their findings in answer to a topic or thesis that they themselves have chosen for their dissertation. The students will be evaluated on their ability to conduct independent research, which is something they should have developed throughout their time at the institution. This evaluation will count toward the students' overall grades.
</p>
<p className="pg9">Even while your instructors will most likely provide you with some direction, the majority of the work on your dissertation will be done on your own. This will be the longest, hardest, and most essential assignment that the majority of students will complete throughout their time at the university. It will need months of preparation and hard effort.
On the other hand, it has the potential to be incredibly gratifying, particularly if you have a strong interest in the subject you decide to write about. Consequently, it is unquestionably a wise decision to make sure that you pick a topic that you have a true interest in.

</p>


             </div>
                <div className="head29 ">
                  <h4 className="h4hai">Types of Dessertations</h4>
                </div>

                
              
            </div>
          </div>

          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <DissCard
                    title="Empirical Dissertations"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
                  />
                  <DissCard
                    title="Non-Empirical Dissertations"
                    para="Non-empirical dissertations are supported by data and ideas that have already been presented in the work of others. A lot of time will be spent reading! When writing this form of a dissertation, you must not only describe what others have said but also critically analyse the work and examine its practical applicability"
                  />
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DissNeed;
