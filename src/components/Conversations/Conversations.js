import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import InputBox from "../InputBox";
import UserMessage from "../UserMessage";
import WrapperBox from "../WrapperBox";
import { USER_CONVERSATIONS } from "./constants";
import "./Conversations.scss";

const Conversations = (props) => {
  const bottomRef = useRef(null);
  const userData = useSelector(getUserData);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <WrapperBox className="qc-conversations">
      <div className="qc-c-scroll">
        <div className="qc-c-wrapper">
          {USER_CONVERSATIONS.map((data, index) => {
            const isActive = data.userId === userData.userId;
            return <UserMessage key={index} {...data} isActive={isActive} />;
          })}
        </div>
        <div ref={bottomRef} />
      </div>
      <InputBox />
    </WrapperBox>
  );
};

export default Conversations;
