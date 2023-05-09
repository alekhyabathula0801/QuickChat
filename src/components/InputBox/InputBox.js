import React from "react";
import { ReactComponent as Attachment } from "../../assets/attachment.svg";
import { ReactComponent as Forward } from "../../assets/forward.svg";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./InputBox.scss";

const InputBox = (props) => {
  return (
    <WrapperBox className="qc-footer-action">
      <Attachment className="qc-fa-attachment" />
      <div className="qc-fa-input-wrapper" >
        <input placeholder="Enter your message here" />
        <Smile className="qc-fa-smiley" />
      </div>
      <ButtonWithIcon Icon={Forward} title="Send" />
    </WrapperBox>
  );
};

export default InputBox;
