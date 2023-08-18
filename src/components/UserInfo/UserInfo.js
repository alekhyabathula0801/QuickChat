import React, { useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import settings from "../../assets/settings.svg";
import {
  getUserData,
  updateUserData,
} from "../../dataLayer/reducers/userConfig";
import useAppNavigation from "../../hooks/useAppNavigation";
import Menu from "../Menu";
import WrapperBox from "../WrapperBox";
import { MENU_OPTIONS } from "./constants";
import { getUserStatus } from "./helper";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const dispatch = useDispatch();
  const { navigate } = useAppNavigation();
  const { icon, name, subtitle, isActive } = useSelector(
    getUserData,
    shallowEqual
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const status = useMemo(() => getUserStatus(isActive), [isActive]);

  const onSettingsClick = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const onMenuItemClick = (data = {}) => {
    const pathname = data.pathname;
    if (pathname) {
      navigate(pathname);
    }
  };

  const onToogle = () => {
    dispatch(
      updateUserData({
        isActive: !isActive,
      })
    );
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
            onMenuItemClick={onMenuItemClick}
          />
        </div>
      </div>
      <div className="qc-ui-subtitle">{subtitle}</div>
      <div className="qc-ui-status">
        <div
          onClick={onToogle}
          className={`qc-ui-toggle ${isActive ? "qc-ui-toggle-active" : ""}`}
        >
          <div className="qc-uit-dot" />
        </div>
        <div className="qc-ui-s-text">{status}</div>
      </div>
    </WrapperBox>
  );
};

export default UserInfo;
