import PropTypes from "prop-types";
import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { getSelectedContact } from "../../dataLayer/reducers/contacts";
import Badge from "../Badge";
import "./Contact.scss";

const Contact = (props) => {
  const { name, icon, className, number, id } = props;
  const selectedContact = useSelector(getSelectedContact);

  const getActiveTagClassname = () => {
    const isActiveContact = selectedContact.id === id;
    const activeCss = isActiveContact ? "qc-c-active" : "";
    return activeCss;
  };
  
  const activeTagClassname = useMemo(getActiveTagClassname, [selectedContact, id]);

  return (
    <div className={`qc-contact ${activeTagClassname} ${className}`}>
      <div className="qc-c-content">
        <img alt="user" className="qc-c-image" src={icon} />
        <div className="qc-c-title">{name}</div>
      </div>
      {number && <Badge number={number} />}
    </div>
  );
};

export default memo(Contact);

Contact.propTypes = {
  isActive: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  number: PropTypes.number,
};
