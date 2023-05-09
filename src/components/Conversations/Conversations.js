import React from "react";
import { USER_CONVERSATIONS, USER_DATA } from "./constants";
import UserMessage from "../UserMessage";
import WrapperBox from "../WrapperBox";
import InputBox from "../InputBox";
import "./Conversations.scss";

const Conversations = (props) => {
  return (
    <WrapperBox className="qc-conversations" >
      {USER_CONVERSATIONS.map((data) => {
        const isActive = data.userId === USER_DATA.userId;
        return <UserMessage {...data} isActive={isActive} />;
      })}
      <InputBox />
    </WrapperBox>
  );
};

export default Conversations;