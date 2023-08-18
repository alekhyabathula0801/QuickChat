import React, { memo } from "react";
import PropTypes from "prop-types";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { icon, title, subtext, isUser, isActive } = props;
  return (
    <div className={`qc-user-message ${isUser ? "active" : ""}`}>
      <div className="qc-um-icon-wrapper">
        <img alt="icon" src={icon} className="qc-um-icon" />
        <span className={`qc-um-dot ${isActive ? `qc-um-dot-active` : ''}`} />
      </div>
      <div>
        <div className="qc-um-title">{title}</div>
        <div className="qc-um-subtext">{subtext}</div>
      </div>
    </div>
  );
};

export default memo(UserMessage);

UserMessage.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string,
};
