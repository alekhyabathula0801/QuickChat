import React from "react";
import WrapperBox from "../../components/WrapperBox";
import "./ScreenWrapper.scss";

const ScreenWrapper = ({ children, className }) => {
  return (
    <WrapperBox className={`${className} qc-screen-wrapper`}>
      {children}
    </WrapperBox>
  );
};

export default ScreenWrapper;
