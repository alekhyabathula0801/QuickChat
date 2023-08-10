import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Attachment } from "../../assets/attachment.svg";
import { ReactComponent as Forward } from "../../assets/forward.svg";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import { addConversations, getConversationsById } from "../../dataLayer/reducers/conversations";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./InputBox.scss";

const InputBox = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);
  const selectedContact = useSelector(getSelectedContact);
  const conversations = useSelector((state) => getConversationsById(state, selectedContact.id));
  const [message, setMessage] = useState('');

  const onChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  }

  const onSend = () => {
    const data = {
      messageId: conversations.length + 1,
      userId: userData.id,
      title: message,
      subtext: "9h ago",
    };
    dispatch(addConversations({
      id: selectedContact.id,
      data
    }))
  };

  useEffect(() => {
    setMessage('');
  }, [conversations]);

  return (
    <WrapperBox className="qc-footer-action">
      <Attachment className="qc-fa-attachment" />
      <div className="qc-fa-input-wrapper" >
        <input value={message} onChange={onChange} placeholder="Enter your message here" />
        <Smile className="qc-fa-smiley" />
      </div>
      <ButtonWithIcon Icon={Forward} title="Send" onClick={onSend} />
    </WrapperBox>
  );
};

export default InputBox;
