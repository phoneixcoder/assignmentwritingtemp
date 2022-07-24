import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/laptop.png";
import HomeworkWrite from "../../Components/Homework Write/HomeworkWrite";

import Form from "../../Components/Form/Form";

import Pcard from "../../Components/People Card/Pcard";

import Faq from "../../Components/Faq/Faq";
const Homework = () => {
  return (
    <>
      <Hero
        normalText1="Get Your Homework Done With "
        image={image}
        normalText2="Our Assistance"
        normalText3="Get Your Dessertations Written at just  "
        normalText4=" a page"
        highlightedText1=""
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <HomeworkWrite/>
      <Form/>
      <Pcard/>
      
      <Faq/>
      
      </>
      
    
  );
};

export default Homework;
