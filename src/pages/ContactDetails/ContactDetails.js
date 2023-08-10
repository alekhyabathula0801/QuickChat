import React from "react";
import logo from "../../assets/quick-chat-logo.png";
import ContactInfo from "../../components/ContactInfo";
import WrapperBox from "../../components/WrapperBox";
import useAppNavigation from "../../hooks/useAppNavigation";
import { APP_ROUTES } from "../../navigation/routeConstants";
import "./ContactDetails.scss";

const ContactDetails = (props) => {
  const { navigate } = useAppNavigation();

  const redirectToHome = () => {
    navigate(APP_ROUTES.home);
  };

  return (
    <WrapperBox className="quick-chat-user-activity">
      <img alt="logo" src={logo} onClick={redirectToHome} />
      <ContactInfo />
    </WrapperBox>
  );
};

export default ContactDetails;
