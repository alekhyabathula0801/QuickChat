import React from "react";
import logo from "../../assets/quick-chat-logo.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="qc-logo">
      <img alt="logo" src={logo} />
      <div>QuickChat</div>
    </div>
  );
};

export default Logo;
