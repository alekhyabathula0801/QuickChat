import React from "react";
import ContactInfo from "../../components/ContactInfo";
import ScreenHeader from "../../components/ScreenHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import "./ContactDetails.scss";

const ContactDetails = (props) => {
  return (
    <ScreenWrapper className="quick-chat-user-activity">
      <ScreenHeader />
      <ContactInfo />
    </ScreenWrapper>
  );
};

export default ContactDetails;
