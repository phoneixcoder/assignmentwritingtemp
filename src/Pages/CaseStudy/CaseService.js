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
const CaseService = () => {
  return (
    <>
      <Hero
        normalText1="We have covered your"
        image={image}
        normalText2=" writing"
        normalText3="Get Your Case Studies Written at just "
        normalText4=" a page"
        highlightedText1=" Case Study"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <CaseStudy/>
      <CodeWonder/>
      <Pcard/>
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default CaseService;
