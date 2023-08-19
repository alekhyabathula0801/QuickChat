import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { isEmpty } from "lodash-es";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReactComponent as Attachment } from "../../assets/attachment.svg";
import { ReactComponent as Forward } from "../../assets/forward.svg";
import { ReactComponent as Smile } from "../../assets/smile.svg";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import {
  addConversations,
  getConversationsById,
} from "../../dataLayer/reducers/conversations";
import { getUserData } from "../../dataLayer/reducers/userConfig";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./InputBox.scss";

const InputBox = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData, shallowEqual);
  const selectedContact = useSelector(getSelectedContact, shallowEqual);
  const conversations = useSelector(
    (state) => getConversationsById(state, selectedContact.id),
    shallowEqual
  );
  const [message, setMessage] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const onChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  };

  const onSend = () => {
    if (isEmpty(message)) {
      return;
    }
    const date = new Date().toISOString();

    const data = {
      messageId: conversations.length + 1,
      userId: userData.id,
      title: message,
      date,
    };
    dispatch(
      addConversations({
        id: selectedContact.id,
        data,
      })
    );
  };

  useEffect(() => {
    setMessage("");
  }, [conversations]);

  const openEmojis = (event) => {
    event.stopPropagation();
    setShowEmojis(true);
  };

  const closeEmojis = () => {
    setShowEmojis(false);
  };

  const addEmoji = (e) => {
    const symbols = e.unified.split("-");
    const codesArray = [];
    symbols.forEach((el) => codesArray.push("0x" + el));
    const emoji = String.fromCodePoint(...codesArray);
    setMessage(message + emoji);
  };

  const onAttachmentClick = () => {
    const filepicker = document.getElementById("qc-attchment-input");
    if (filepicker) {
      filepicker.click();
    }
  };

  const promisableGetBase64 = (file) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      try {
        reader.onload = (ev) => {
          resolve(ev.target.result);
        };
        reader.readAsDataURL(file);
      } catch (err) {
        reject({
          ...err,
          errorMessage: err?.message,
          message: "Failed to read the file, please try again later",
          type: "reader",
        });
      }
    });
  }

  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    try {
      let fileBase64 = "";

      const isImage = file.type.split("/")[0] === "image";
      if (isImage) {
        fileBase64 = await promisableGetBase64(file);
      }
      const date = new Date().toISOString();

      const data = {
        messageId: conversations.length + 1,
        userId: userData.id,
        title: file.name,
        date,
        isAttachment: true,
        imageSrc: fileBase64,
        isImage,
      };
      dispatch(
        addConversations({
          id: selectedContact.id,
          data,
        })
      );
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <WrapperBox className="qc-footer-action">
        <input
          id="qc-attchment-input"
          type="file"
          style={{ visibility: "hidden", display: "none" }}
          onChange={onFileSelected}
        />
        <Attachment onClick={onAttachmentClick} className="qc-fa-attachment" />
        <div className="qc-fa-input-wrapper">
          <input
            value={message}
            onChange={onChange}
            placeholder="Enter your message here"
          />
          <Smile onClick={openEmojis} className="qc-fa-smiley" />
        </div>

        <ButtonWithIcon Icon={Forward} title="Send" onClick={onSend} />
      </WrapperBox>
      {showEmojis && (
        <div className="qc-picker-wrapper">
          <Picker
            data={data}
            onClickOutside={closeEmojis}
            onEmojiSelect={addEmoji}
            dynamicWidth
            emojiButtonSize={32}
            emojiSize={22}
          />
        </div>
      )}
    </>
  );
};

export default InputBox;
