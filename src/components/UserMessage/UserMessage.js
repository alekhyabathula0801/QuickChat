import React from "react";
import PropTypes from "prop-types";
import Message from "../Message";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { icon, title, subtext } = props;
  return (
    <div className={`qc-user-message`}>
      <div className="qc-um-icon-wrapper">
        <img src={icon} className="qc-um-icon" />
        <span className="qc-um-dot" />
      </div>
      <div>
        <Message title={title} />
        <div className="qc-um-subtext">{subtext}</div>
      </div>
    </div>
  );
};

export default UserMessage;

UserMessage.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtext: PropTypes.string,
};
