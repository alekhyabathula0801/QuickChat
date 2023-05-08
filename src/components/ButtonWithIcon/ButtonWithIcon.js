import React from "react";
import PropTypes from "prop-types";
import "./ButtonWithIcon.scss";

const ButtonWithIcon = (props) => {
  const { title, Icon } = props;
  return (
    <button className="qc-button-with-icon">
      <div>{title}</div>
      {Icon && <Icon className="qc-bwi-image" />}
    </button>
  );
};

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.node,
};
