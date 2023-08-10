import React from "react";
import PropTypes from "prop-types";
import "./BarMeter.scss";

const BarMeter = (props) => {
  const { options = [], className = "" } = props;
  return (
    <div className={`qc-bar-meter ${className}`}>
      {options.map((data, index) => {
        return <Bar key={index} {...data} />;
      })}
    </div>
  );
};

const Bar = ({ label = "", isActive = false, value }) => {
  return (
    <div className={`qc-bm-bar-wrapper ${isActive ? "active-bar" : ""}`}>
      <div
        className="qc-bm-bar"
        style={{
          height: `${value}%`,
        }}
      ></div>
      <div className="qc-bm-dot" />
      <div>{label}</div>
    </div>
  );
};

export default BarMeter;

BarMeter.propTypes = {
  options: PropTypes.array,
  className: PropTypes.string,
};

Bar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  isActive: PropTypes.bool,
};
