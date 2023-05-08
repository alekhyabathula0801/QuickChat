import React from "react";
import PropTypes from "prop-types";
import settings from "../../assets/settings.svg";
import WrapperBox from "../WrapperBox";
import "./UserInfo.scss";

const UserInfo = (props) => {
  const { icon, title, subtitle, status } = props;
  return (
    <WrapperBox className="qc-user-info">
      <img alt="user" className="qc-ui-image" src={icon} />
      <div className="qc-ui-title">
        <div>{title}</div>
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  status: PropTypes.string,
};
