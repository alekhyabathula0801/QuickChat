import React from "react";
import ScreenHeader from "../../components/ScreenHeader";
import ScreenWrapper from "../../components/ScreenWrapper";
import ShareLink from "../../components/ShareLink";
import WeekActivity from "../../components/WeekActivity/WeekActivity";
import "./UserActivity.scss";

const UserActivity = (props) => {
  return (
    <ScreenWrapper className="quick-chat-user-activity">
      <ScreenHeader />
      <WeekActivity />
      <ShareLink />
    </ScreenWrapper>
  );
};

export default UserActivity;
