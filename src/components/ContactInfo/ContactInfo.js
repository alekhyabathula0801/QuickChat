import React, { useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ReactComponent as Archive } from "../../assets/archive.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import {
  getContactsList,
  getSelectedContact,
  setContacts,
  setSelectedContact,
} from "../../dataLayer/reducers/contacts";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./ContactInfo.scss";
import { getArchiveButtonText } from "./helper";

const ContactInfo = (props) => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContactsList, shallowEqual);
  const { shortName, name, email, isArchived, id } = useSelector(
    getSelectedContact,
    shallowEqual
  );

  const archivedStatus = useMemo(
    () => getArchiveButtonText(isArchived),
    [isArchived]
  );

  const toogleArchiveStatus = () => {
    let updatedSelectedData = {};
    const updatedList = contactList.map((contact) => {
      if (contact.id === id) {
        let data = {
          ...contact,
        };
        data.isArchived = !contact.isArchived;
        updatedSelectedData = data;
        return data;
      }
      return contact;
    });
    dispatch(setContacts(updatedList));
    dispatch(setSelectedContact(updatedSelectedData));
  };

  return (
    <WrapperBox className="qc-contact-info">
      <div className="qc-ci-short-name">{shortName}</div>
      <div className="qc-ci-content">
        <Mail alt="email" className="qc-ci-icon" />
        <div>{email}</div>
      </div>
      <div className="qc-ci-content">
        <Profile alt="profile" className="qc-ci-icon" />
        <div>{name}</div>
      </div>
      <ButtonWithIcon
        onClick={toogleArchiveStatus}
        title={archivedStatus}
        Icon={Archive}
      />
    </WrapperBox>
  );
};

export default ContactInfo;
