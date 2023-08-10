import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ReactComponent as Archive } from "../../assets/archive.svg";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import ButtonWithIcon from "../ButtonWithIcon";
import WrapperBox from "../WrapperBox";
import "./ContactInfo.scss";

const ContactInfo = (props) => {
  const { shortName, name, email } = useSelector(getSelectedContact, shallowEqual);
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
      <ButtonWithIcon title={"Archive"} Icon={Archive} />
    </WrapperBox>
  );
};

export default ContactInfo;
