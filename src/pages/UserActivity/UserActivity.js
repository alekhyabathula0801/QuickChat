import React from "react";
import logo from "../../assets/quick-chat-logo.png";
import ShareLink from "../../components/ShareLink";
import WeekActivity from "../../components/WeekActivity/WeekActivity";
import WrapperBox from "../../components/WrapperBox";
import useAppNavigation from "../../hooks/useAppNavigation";
import { APP_ROUTES } from "../../navigation/routeConstants";
import "./UserActivity.scss";

const UserActivity = (props) => {
  const { navigate } = useAppNavigation();

  const redirectToHome = () => {
    navigate(APP_ROUTES.home);
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
