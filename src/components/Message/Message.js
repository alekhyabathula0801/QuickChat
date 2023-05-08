import React from "react";
import PropTypes from "prop-types";
import "./Message.scss";

const Message = (props) => {
  const { title, backgroundColor, color, className } = props;
  return (
    <div
      style={{
        color,
        backgroundColor,
      }}
      className={`qc-message ${className}`}
    >
      {title}
    </div>
  );
};

export default Message;

Message.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
};
