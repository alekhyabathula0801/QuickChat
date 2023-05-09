import React from "react";
import PropTypes from "prop-types";
import "./Message.scss";

const Message = (props) => {
  const { title, isActive } = props;
  return (
    <div className={`qc-message ${isActive ? "active" : ""}`}>{title}</div>
  );
};

export default Message;

Message.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
};
