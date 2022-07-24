import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/hero1.png";
import Compose from "../../Components/Compose/Compose";
import CodeWonder from "../../Components/CodeWonder/CodeWonder";
import CodeAssistance from "../../Components/CodeAssistance/CodeAssistance";
import Form from "../../Components/Form/Form";

import Pcard from "../../Components/People Card/Pcard";

import Faq from "../../Components/Faq/Faq";
import CaseStudy from "../../Components/CaseStudy/CaseStudy";
import Review from "../../Components/Reviews/Review";
import ResearchType from "../../Components/ResearchTypes/ResearchTypes";
const ResearchPaper = () => {
  return (
    <>
      <Hero
        normalText1="We have covered your"
        image={image}
        normalText2=" Papers writing"
        normalText3="Get Your Research Paper at just "
        normalText4=" a page"
        highlightedText1=" Research "
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <ResearchType/>
      <CodeWonder/>
      <Pcard/>
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default ResearchPaper;
