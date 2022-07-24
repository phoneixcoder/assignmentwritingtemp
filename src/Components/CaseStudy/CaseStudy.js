import React from "react";


import "../CaseStudy/CaseStudy.css";
import CaseCard from "./CaseCard";

const CaseStudy= () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center backScolorp">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="subjects-heading1--container9">
        <h1 className="subjects-heading1--text9">Need Help in your Case Studies?</h1>
        
      </div>

             <div className="paragra">
<p className="pg9">A case study is an in-depth investigation of a single individual, group, or event. Almost all of the subject's past and present are scrutinized in order to discover any patterns or causes for their conduct.
It is possible to use case studies in a range of fields, such as psychology and medicine as well as anthropology and political science.
If we can learn from one scenario, we aim to apply the lessons learned there to other situations. Due to the inherent subjectivity of case studies, it might be difficult to extrapolate conclusions to the broader public at large
</p>
<p className="pg9">We are well aware of the requirements of University Students, Corporates, Firms, and even reputable Educational & Research institutions that look for Case Study Writing services to support them in the various stages because we are a trustworthy content writing agency. These types of clients look for Case Study Writing Agencies to assist them. We at Assignment Writing Services understand the needs of such clients and offer them the best Case Study Writing Service in this industry.


</p>


             </div>
                <div className="head29 ">
                  <h4 className="h4hai">Types of Case Studies</h4>
                </div>

                
              
            </div>
          </div>

          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <CaseCard
                    title="Collective Case Studies"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
                  />
                  <CaseCard
                    title="Descriptive Case Studies"
                    para="Non-empirical dissertations are supported by data and ideas that have already been presented in the work of others. A lot of time will be spent reading! When writing this form of a dissertation, you must not only describe what others have said but also critically analyse the work and examine its practical applicability"
                  />
                 <CaseCard
                    title="Explanatory Case Studies"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
                  />
                  <CaseCard
                    title="Exploratory Case Studies"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
                  />
                  <CaseCard
                    title="Instruemental Case Studies"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
                  />
                  <CaseCard
                    title="Intrinsic Case Studies"
                    para="Empirical Dissertations are a type of dissertation that require the collection of data, such as those required for a degree in psychology. When gathering information from members of the public, this could require adhering to certain standards of professionalism and ethics."
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

export default CaseStudy;
