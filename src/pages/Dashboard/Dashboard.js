import PropTypes from "prop-types";
import React from "react";
import ContactInfo from "../../components/ContactInfo";
import ContactList from "../../components/ContactList";
import Conversations from "../../components/Conversations";
import Logo from "../../components/Logo";
import ShareLink from "../../components/ShareLink";
import UserInfo from "../../components/UserInfo";
import WeekActivity from "../../components/WeekActivity/WeekActivity";
import WrapperBox from "../../components/WrapperBox";
import "./Dashboard.scss";

const Dashboard = (props) => {
  return (
    <WrapperBox className="quick-chat-dashboard">
      <div className="qcd-left-panel">
        <Logo />
        <UserInfo />
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
