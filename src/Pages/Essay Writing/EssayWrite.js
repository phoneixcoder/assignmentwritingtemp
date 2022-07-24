import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/hero1.png";
import ProvideCard from "../../Components/ProvideCard/ProvideCard";
import Pcard from "../../Components/People Card/Pcard";

import Faq from "../../Components/Faq/Faq";
import Services from "../../Components/Services/Service";
import Review from "../../Components/Reviews/Review";
const EssayWrite = () => {
  return (
    <>
      <Hero
        normalText1="Get"
        image={image}
        normalText2=" in Writing Your Essay"
        normalText3="Choose Best In Class Assignment Writing Service at just "
        normalText4=" a page"
        highlightedText1=" Assistance"
        highlightedText2=" "
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <Services/>
      <ProvideCard/>
      <Pcard/>
      <Review/>
      <Faq/>
      
      
      
    </>
  );
};

export default EssayWrite;
