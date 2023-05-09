import React, { memo } from "react";
import PropTypes from "prop-types";
import Message from "../Message";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { icon, title, subtext, isActive } = props;
  return (
    <div className={`qc-user-message ${isActive ? "active" : ""}`}>
      <div className="qc-um-icon-wrapper">
        <img alt="icon" src={icon} className="qc-um-icon" />
        <span className="qc-um-dot" />
      </div>
      <div>
        <Message title={title} isActive={isActive} />
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
