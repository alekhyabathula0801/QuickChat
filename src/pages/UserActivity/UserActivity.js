import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/quick-chat-logo.png";
import ShareLink from "../../components/ShareLink";
import WeekActivity from "../../components/WeekActivity/WeekActivity";
import WrapperBox from "../../components/WrapperBox";
import "./UserActivity.scss";

const UserActivity = (props) => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <WrapperBox className="quick-chat-user-activity">
      <img alt="logo" src={logo} onClick={redirectToHome} />
      <WeekActivity />
      <ShareLink />
    </WrapperBox>
  );
};

export default UserActivity;
