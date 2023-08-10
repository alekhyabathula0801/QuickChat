import React, { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import settings from "../../assets/settings.svg";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import Menu from "../Menu";
import WrapperBox from "../WrapperBox";
import { MENU_OPTIONS } from "./constants";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const { icon, name, subtitle, status } = useSelector(
    getUserData,
    shallowEqual
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onSettingsClick = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <WrapperBox className={`qc-user-info`}>
      <img alt="user" className="qc-ui-image" src={icon} />
      <div className="qc-ui-title">
        <div>{name}</div>
        <div className="qc-ui-settings-block">
          <img
            alt="settings"
            onClick={onSettingsClick}
            className="qc-ui-settings"
            src={settings}
          />
          <Menu
            isOpen={isMenuOpen}
            onClose={closeMenu}
            options={MENU_OPTIONS}
          />
        </div>
      </div>
      <div className="qc-ui-subtitle">{subtitle}</div>
      <div className="qc-ui-status">
        <div className="qc-ui-toggle">
          <div className="qc-uit-dot" />
        </div>
        <div>{status}</div>
      </div>
    </WrapperBox>
  );
};

export default UserInfo;
