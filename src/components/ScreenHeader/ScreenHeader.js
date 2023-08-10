import React from "react";
import logo from "../../assets/quick-chat-logo.png";
import useAppNavigation from "../../hooks/useAppNavigation";
import { APP_ROUTES } from "../../navigation/routeConstants";
import "./ScreenHeader.scss";

const ScreenHeader = ({ title, onTitleClick }) => {
  const { navigate } = useAppNavigation();

  const redirectToHome = () => {
    navigate(APP_ROUTES.home);
  };

  return (
    <div className="qc-screen-header">
      <img onClick={redirectToHome} alt="logo" src={logo} />
      <div onClick={onTitleClick}>{title}</div>
    </div>
  );
};

export default ScreenHeader;
