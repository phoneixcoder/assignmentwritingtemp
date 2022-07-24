import React from "react";
import "./reason.css";
import ReasonCard from "./ReasonCard";
import reasons from "../../assets/Reasons/reasons.svg";
const Reasons = () => {
  return (
    <>
      <div className="reason">
        <div className="reasons-main-heading-container">
          <img src={reasons} alt="" className="reasons-background" />
          <h1 className="reasons-main-heading">14 Reasons Why?</h1>
        </div>
        <div className="reasons-card-container">
          <ReasonCard
            heading="Deep Industry Expertise And Focus On Innovation"
            detail="At Assignment Cure, we hire top “1%” writers in the industry. This enables us to provide strategic support to our clients on all the fronts."
            number="1"
          />
          <ReasonCard
            heading="Deep Industry Expertise And Focus On Innovation"
            detail="We are more than a writing service provider. Clients need personalization, which we provide then easily."
            number="2"
          />
          <ReasonCard
            heading="Within Budget and Deadlines"
            detail="We know the challenges of students during their years at university. Time and money are two things they are always concerned about. We are concerned too."
            number="3"
          />
          <ReasonCard
            heading="Creating ideas with passion"
            detail="We write for the moral duty of writing. Treating the work as our own, we write to outperform your expectations from us."
            number="4"
          />
          <ReasonCard
            heading="Solution for a true revolution"
            detail="Clients always get the best in the Industry. If you find a problem with the service, get it redone again! That too without extra cost!"
            number="5"
          />
          <ReasonCard
            heading="Quality Product Delivery"
            detail="Offering service through Mail, In-Call, Social Media and many more channels. This is a unique feature that we provide, and others don't."
            number="6"
          />
          <ReasonCard
            heading="Multiple Channel Availability"
            detail="Once you get your Assignments, you own the documents completely. We transfer the True Ownership Certificate to you. We place no claim on the Intellectual Property after we deliver it to you."
            number="7"
          />
          <ReasonCard
            heading="True Ownership Certificate"
            detail="Your service account is maintained by a special team that is hired for this purpose only. We want to ensure smoothness in your experience."
            number="8"
          />
          <ReasonCard
            heading="Smooth Account Management"
            detail="Your service account is maintained by a special team that is hired for this purpose only. We want to ensure smoothness in your experience."
            number="9"
          />
          <ReasonCard
            heading="Work Savvy Culture"
            detail="Your service account is maintained by a special team that is hired for this purpose only. We want to ensure smoothness in your experience."
            number="10"
          />
          <ReasonCard
            heading="Goal Oriented and Return Driven Focus"
            detail="At Assignment Cure, our team works on standard operating principles. Hence returns to the clients are ensured."
            number="11"
          />
          <ReasonCard
            heading="Client First and Client Centric Policy"
            detail="Caring for client’s needs, values, preferences, objectives and culture is our work motto. For us, the client is first and the last pillar of success."
            number="12"
          />
          <ReasonCard
            heading="Clients & Years of Experience"
            detail="In the past we have catered to multiple clients, and hence have a wide experience towards quality and success."
            number="13"
          />
          <ReasonCard
            heading="Data Protection and Cyber Security"
            detail="Data is the new gold and we want it to be safeguarded. At Assignment Cure, the Writing Service we provide ensures your gold remains safe with us."
            number="14"
          />
        </div>
      </div>
    </>
  );
};

export default Reasons;
