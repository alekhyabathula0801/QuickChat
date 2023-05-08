import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Mail } from "../../assets/mail.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as Archive } from "../../assets/archive.svg";
import "./ContactInfo.scss";

const ContactInfo = (props) => {
  const { shortName, name, email } = props;
  return (
    <div className="qc-contact-info">
      <div className="qc-ci-short-name">{shortName}</div>
      <div className="qc-ci-content">
        <Mail alt="email" className="qc-ci-icon" />
        <div>{email}</div>
      </div>
      <div className="qc-ci-content">
        <Profile alt="profile" className="qc-ci-icon" />
        <div>{name}</div>
      </div>
      <button className="qc-ci-button">
        <div>Archive</div>
        <Archive className="qc-ci-archive-icon" />
      </button>
    </div>
  );
};

export default ContactInfo;

ContactInfo.propTypes = {
  shortName: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};
