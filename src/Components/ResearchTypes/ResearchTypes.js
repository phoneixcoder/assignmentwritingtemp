import React from "react";
import "../ResearchTypes/ResearchTypes.css";

import Shield from "../About Us Top/AboutImg/Secured.svg";
import Target from "../About Us Top/AboutImg/Target.svg";
import Hand from "../About Us Top/AboutImg/Handshake.svg";
import Quality from "../About Us Top/AboutImg/Quality Badge.svg";

import RCard from "./Rcard";

const ResearchType = () => {
  return (
    <>
      <div className="row paddingbot">
        <div className="col-10 mx-auto">
          <div className="my-5 container header_containerabout5 ">
            <h3 className="text-center headService">
              Need Help in your Research Papers?
            </h3>
          </div>

          <div className="container-fluid  ">
            <div className="row">
              <div className="col-12 mx-auto">
                <p className="abPara5">
                  A research paper is a typical type of academic writing that
                  involves in-depth investigation and analysis. Study papers
                  demand students and academics to conduct research on a topic,
                  take a stance on that topic, and present evidence (or support)
                  for that viewpoint in a well-structured report. Some people
                  use the word "research papers" interchangeably with academic
                  articles that contain the results of original research or
                  critiques on work done by others, however, this is not always
                  the case. To be published in an academic journal, most
                  scientific publications must first be peer-reviewed by at
                  least one other researcher.
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid secondpadding  ">
            <div className="row">
              <div className="col-12 mx-auto">
                <p className="abPara5">
                  The research paper writing service is one of the most popular
                  services supplied by Assignment Writing Services. The service
                  is intended to aid our students and researchers who wish to
                  publish articles in worldwide or peer-reviewed journals and
                  desire to attract wide renown in the fraternity of research.
                  Research paper writing service entails assistance services
                  from our end in numerous kinds and techniques. While these can
                  be of many forms, the ultimate objective that is served is by
                  helping the student or researcher obtain recognition as a
                  researcher. So, the duty is tough and demanding as well. Our
                  services are also channelized to accomplish such high
                  standards and even the minutest aspects are taken care of.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <h4 className="aboutH5">Types of Research Papers</h4>

                <RCard
                  title="Research Paper With Analysis"
                  para="We provide 24/7 customer service to our clients for help with any query they might Analytical research papers look at facts, events, problems, and ideas. In this, the researcher first explains how the research problem can be seen from different points of view. Then, using information from other researchers, he or she analyses all the different points and concludes."
                />
                <RCard
                  title="Research Paper with an Argument"
                  para="As the name suggests, an argumentative research paper looks at the research topic from two different points of view. In this type, the researcher must explain the problem from two different points of view, analyse them to show their pros and cons, and then support one of the points of view."
                />
                <RCard
                  title="Research Paper on Experiments"
                  para="In this, the researcher does the experiment, talks about what he learned, and then gives the data and a summary of his research. Most of the time, these papers are written for biology, chemistry, physics, psychology, and sociology classes."
                />
                <RCard
                  title="Research Paper on Problem-Solution"
                  para="The goal of a Problem-Solution Research Paper, as the name suggests, is to find answers to certain problems. In this research paper, the researcher explains the problem, analyses the available information, comes up with some possible solutions, and shows that they work by giving examples, details, statistics, etc."
                />
                <RCard
                  title="Research Paper on Survey"
                  para="In this paper, the researcher has to do research, figure out what the data means, analyse the results, and then come to a conclusion. In this case, the survey is done by asking people questions. This looks at how people act in different situations."
                />
                <RCard
                  title="Research Paper on Survey"
                  para="In this paper, the researcher has to do research, figure out what the data means, analyse the results, and then come to a conclusion. In this case, the survey is done by asking people questions. This looks at how people act in different situations."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchType;
