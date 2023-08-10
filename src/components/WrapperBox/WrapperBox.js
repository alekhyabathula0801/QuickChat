import React from "react";
import PropTypes from "prop-types";
import "./WrapperBox.scss";

const WrapperBox = (props) => {
  const { className, children } = props;
  return <div className={`qc-wrapper-box ${className}`}>{children}</div>;
};

export default WrapperBox;

WrapperBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
