import React, { useEffect, useRef } from "react";
import { USER_CONVERSATIONS, USER_DATA } from "./constants";
import UserMessage from "../UserMessage";
import WrapperBox from "../WrapperBox";
import InputBox from "../InputBox";
import "./Conversations.scss";

const Conversations = (props) => {
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <WrapperBox className="qc-conversations">
      <div className="qc-c-scroll">
        <div className="qc-c-wrapper">
          {USER_CONVERSATIONS.map((data, index) => {
            const isActive = data.userId === USER_DATA.userId;
            return <UserMessage key={index} {...data} isActive={isActive} />;
          })}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <InputBox />
    </WrapperBox>
  );
};

export default Conversations;
