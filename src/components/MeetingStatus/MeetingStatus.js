import React from "react";
import PropTypes from "prop-types";
import WrapperBox from "../WrapperBox";
import "./MeetingStatus.scss";

const MeetingStatus = (props) => {
  const { Icon, title, subtitle, className = "" } = props;
  return (
    <WrapperBox className={`qc-meeting-status ${className}`}>
      {Icon && (
        <div className="qc-ms-icon-wrapper">
          <Icon className="qc-ms-icon" />
        </div>
      )}
      <div>
        <div className="qc-ms-title">{title}</div>
        <div className="qc-ms-subtitle">{subtitle}</div>
      </div>
    </WrapperBox>
  );
};

export default MeetingStatus;

MeetingStatus.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};
