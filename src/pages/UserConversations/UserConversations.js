import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Conversations from "../../components/Conversations";
import ScreenHeader from "../../components/ScreenHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import useAppNavigation from "../../hooks/useAppNavigation";
import { APP_ROUTES } from "../../navigation/routeConstants";
import "./UserConversations.scss";

const UserConversations = (props) => {
  const { navigate } = useAppNavigation();
  const selectedContact = useSelector(getSelectedContact, shallowEqual);

  const redirectToContactDetails = () => {
    navigate(APP_ROUTES.contactDetails);
  };

  return (
    <ScreenWrapper className="quick-chat-user-conversations">
      <ScreenHeader
        title={selectedContact.name}
        onTitleClick={redirectToContactDetails}
      />
      <div className="qcuc-main-pannel">
        <Conversations />
      </div>
    </ScreenWrapper>
  );
};

export default UserConversations;
