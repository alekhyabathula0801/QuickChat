import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import { getConversationsById } from "../../dataLayer/reducers/conversations";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import InputBox from "../InputBox";
import UserMessage from "../UserMessage";
import WrapperBox from "../WrapperBox";
import "./Conversations.scss";

const Conversations = (props) => {
  const bottomRef = useRef(null);
  const userData = useSelector(getUserData);
  const selectedContact = useSelector(getSelectedContact);
  const conversations = useSelector((state) => getConversationsById(state, selectedContact.id));

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [conversations]);

  return (
    <WrapperBox className="qc-conversations">
      <div className="qc-c-scroll">
        <div className="qc-c-wrapper">
          {conversations.map((data, index) => {
            let icon = selectedContact.icon;
            const isActive = data.userId === userData.id;
            if (isActive) {
              icon = userData.icon;
            }
            return <UserMessage key={index} {...data} icon={icon} isActive={isActive} />;
          })}
        </div>
        <div ref={bottomRef} />
      </div>
      <InputBox />
    </WrapperBox>
  );
};

export default Conversations;
