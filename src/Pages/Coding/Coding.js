import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/hero1.png";
import Compose from "../../Components/Compose/Compose";
import CodeWonder from "../../Components/CodeWonder/CodeWonder";
import CodeAssistance from "../../Components/CodeAssistance/CodeAssistance";
import Form from "../../Components/Form/Form";

import Pcard from "../../Components/People Card/Pcard";

import Faq from "../../Components/Faq/Faq";
import Review from "../../Components/Reviews/Review";
const Coding = () => {
  return (
    <>
      <Hero
        normalText1="Stuck In A"
        image={image}
        normalText2="Assignment?"
        normalText3="Get Your Dessertations Written at just  "
        normalText4=" a page"
        highlightedText1=" Programming"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <Compose/>
      <CodeAssistance/>
      <CodeWonder/>
      <Form/>
      <Pcard/>
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default Coding;
