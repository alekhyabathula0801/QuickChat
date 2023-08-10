import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/quick-chat-logo.png";
import ContactInfo from "../../components/ContactInfo";
import WrapperBox from "../../components/WrapperBox";
import "./ContactDetails.scss";

const ContactDetails = (props) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <WrapperBox className="quick-chat-user-activity">
      <img alt="logo" src={logo} onClick={redirectToHome} />
      <ContactInfo />
    </WrapperBox>
  );
};

export default ContactDetails;
