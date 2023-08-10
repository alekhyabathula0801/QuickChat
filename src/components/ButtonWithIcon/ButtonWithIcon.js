import { noop } from "lodash-es";
import PropTypes from "prop-types";
import React from "react";
import "./ButtonWithIcon.scss";

const ButtonWithIcon = (props) => {
  const { title, Icon, onClick } = props;
  return (
    <button onClick={onClick} className="qc-button-with-icon">
      <div>{title}</div>
      {Icon && <Icon className="qc-bwi-image" />}
    </button>
  );
};

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.object,
  onClick: PropTypes.func,
};

ButtonWithIcon.defaultProps = {
  onClick: noop,
};
