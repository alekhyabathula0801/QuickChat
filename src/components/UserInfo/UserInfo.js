import PropTypes from "prop-types";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import settings from "../../assets/settings.svg";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import WrapperBox from "../WrapperBox";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const { icon, name, subtitle, status } = useSelector(getUserData, shallowEqual);
  return (
    <WrapperBox className="qc-user-info">
      <img alt="user" className="qc-ui-image" src={icon} />
      <div className="qc-ui-title">
        <div>{name}</div>
        <img alt="settings" className="qc-ui-settings" src={settings} />
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

UserInfo.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  status: PropTypes.string,
};
