import React, { memo } from "react";
import PropTypes from "prop-types";
import Badge from "../Badge";
import "./Contact.scss";

const Contact = (props) => {
  const { title, icon, className, number, isActive } = props;
  const activeCss = isActive ? "qc-c-active" : "";
  return (
    <div className={`qc-contact ${activeCss} ${className}`}>
      <div className="qc-c-content">
        <img alt="user" className="qc-c-image" src={icon} />
        <div className={`qc-c-title ${activeCss}`}>{title}</div>
      </div>
      {number && <Badge number={number} />}
    </div>
  );
};

export default memo(Contact);

Contact.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  number: PropTypes.number,
};
