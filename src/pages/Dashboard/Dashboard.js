import React from "react";
import PropTypes from "prop-types";
import UserInfo from "../../components/UserInfo";
import { USER_DATA } from "../../components/Conversations/constants";
import ContactList from "../../components/ContactList";
import Conversations from "../../components/Conversations";
import ContactInfo from "../../components/ContactInfo";
import WeekActivity from "../../components/WeekActivity/WeekActivity";
import ShareLink from "../../components/ShareLink";
import WrapperBox from "../../components/WrapperBox";
import Logo from "../../components/Logo";
import "./Dashboard.scss";

const Dashboard = (props) => {
  return (
    <WrapperBox className="quick-chat-dashboard">
      <div className="qcd-left-panel">
        <Logo />
        <UserInfo {...USER_DATA} />
        <ContactList />
      </div>
      <div className="qcd-main-pannel">
        <Conversations />
      </div>
      <div className="qcd-right-panel">
        <ContactInfo
          shortName={"HB"}
          name="Henry Boyd"
          email={"henryboyd@gmail.com"}
        />
        <WeekActivity />
        <ShareLink />
      </div>
    </WrapperBox>
  );
};

export default Dashboard;

Dashboard.propTypes = {
  number: PropTypes.number,
};
