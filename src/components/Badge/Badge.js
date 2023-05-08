import React from "react";
import PropTypes from "prop-types";
import "./Badge.scss";

const Badge = (props) => {
  const { number } = props;
  return <div className="qc-badge">{number}</div>;
};

export default Badge;

Badge.propTypes = {
  number: PropTypes.number,
};
