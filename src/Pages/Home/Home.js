import React from "react";
import './Home.css'
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/background.svg";
import ServiceMain from "../../Components/ServiceMain/ServiceMain";
import Subject from "../../Components/Subjects/Subject";
import Reasons from "../../Components/Reasons/Reasons";
import Blog from "../../Components/Blog/Blog";
import KeyFeatures from "../../Components/Key/Key";
import FaqComponent from "../../Components/Faq/Faq";
import StepsToFollow from "../../Components/StepsToFollow/StepsToFollow";
import Testimonials from "../../Components/Testimonials/Testimonials";
import PeopleCard from "../../Components/People Card/Pcard";

const Home = () => {
  return (
    <>
      <Hero
        normalText1="Premium"
        image={image}
        normalText2="Service For"
        normalText3="University Students"
        normalText4="Choose Best In Class Assignment Writing Service at just "
        normalText5="a page"
        highlightedText1=" Assignment Writing"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Get A Quote"
      />
      <ServiceMain/>
      <Subject/> 
      <KeyFeatures/>
      {/* bookservices */}
      <StepsToFollow/>  
      {/* <PeopleCard/> */}
      <Reasons/>
      {/* <Testimonials/> */}
      {/* <Blog/> */}
      <FaqComponent/>
    </>
  );
};

export default Home;
   