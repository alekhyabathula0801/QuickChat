import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/quick-chat-logo.png";
import Conversations from "../../components/Conversations";
import WrapperBox from "../../components/WrapperBox";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import { APP_ROUTES } from "../../navigation/routeConstants";
import "./UserConversations.scss";

const UserConversations = (props) => {
  const navigate = useNavigate();
  const selectedContact = useSelector(getSelectedContact, shallowEqual);

  const redirectToHome = () => {
    navigate(APP_ROUTES.home);
  };

  return (
    <WrapperBox className="quick-chat-user-conversations">
      <div onClick={redirectToHome} className="qcuc-logo">
        <img alt="logo" src={logo} />
        <div>{selectedContact.name}</div>
      </div>
      <div className="qcuc-main-pannel">
        <Conversations />
      </div>
    </WrapperBox>
  );
};

export default UserConversations;
