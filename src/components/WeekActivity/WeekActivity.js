import React from "react";
import WrapperBox from "../WrapperBox";
import { BAR_MEETER_DATA, MEETING_DATA } from "./constants";
import MeetingStatus from "../MeetingStatus";
import BarMeter from "../BarMeter";
import "./WeekActivity.scss";

const WeekActivity = () => {
  return (
    <WrapperBox className="qc-week-activity">
      <div className="qc-wa-meet-status">
        {MEETING_DATA.map((data, index) => {
          return <MeetingStatus key={index} {...data} />;
        })}
      </div>
      <div className="qc-wa-content" >
        <div className="qc-wa-title" >Current week</div>
        <div>Activity</div>
      </div>
      <BarMeter options={BAR_MEETER_DATA} />
    </WrapperBox>
  );
};

export default WeekActivity;
