import React, { useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import { getConversationsById } from "../../dataLayer/reducers/conversations";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import InputBox from "../InputBox";
import UserMessage from "../UserMessage";
import WrapperBox from "../WrapperBox";
import "./Conversations.scss";
import { getDateViewValue } from "./utils";

const Conversations = (props) => {
  const bottomRef = useRef(null);
  const userData = useSelector(getUserData, shallowEqual);
  const selectedContact = useSelector(getSelectedContact, shallowEqual);
  const conversations = useSelector(
    (state) => getConversationsById(state, selectedContact.id),
    shallowEqual
  );

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [conversations]);

  return (
    <WrapperBox className="qc-conversations">
      <div className="qc-c-scroll">
        <div className="qc-c-wrapper">
          {conversations.map((data, index) => {
            let icon = selectedContact.icon;
            const isUser = data.userId === userData.id;
            let isActive = selectedContact.isActive;
            if (isUser) {
              icon = userData.icon;
              isActive = userData.isActive;
            }
            const subtext = getDateViewValue(data.date);
            return (
              <UserMessage
                key={index}
                {...data}
                subtext={subtext}
                icon={icon}
                isUser={isUser}
                isActive={isActive}
              />
            );
          })}
        </div>
        <div ref={bottomRef} />
      </div>
      <InputBox />
    </WrapperBox>
  );
};

export default Conversations;
