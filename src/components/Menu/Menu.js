import { noop } from "lodash-es";
import { array, bool, func } from "prop-types";
import React from "react";
import "./Menu.scss";

const Menu = ({ options, isOpen, onClose }) => {
  return (
    <div className={`qc-menu ${isOpen ? "qc-menu-active" : ""}`}>
      <div className="qc-menu-list">
        {options.map((data, index) => {
          return (
            <div className="qc-menu-item" key={index}>
              {data.title}
            </div>
          );
        })}
      </div>
      <div onClick={onClose} className="qc-menu-backdrop" />
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  options: array,
  isOpen: bool,
  onClose: func,
};

Menu.defaultProps = {
  options: [],
  isOpen: false,
  onClose: noop,
};
