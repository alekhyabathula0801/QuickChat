import React, { useState } from "react";
import Badge from "../Badge";
import Contact from "../Contact";
import { CONTACT_LIST } from "./constants";
import upArrow from "../../assets/up-arrow.svg";
import { getContactListViewData } from "./utils";
import { noop } from "lodash-es";
import "./ContactList.scss";

const ContactList = (props) => {
  const viewData = getContactListViewData(CONTACT_LIST);
  const [displaySections, setDisplaySections] = useState([viewData[0].id]);

  const handleDisplaySections = (value) => {
    let sections = [...displaySections];
    const isSectionOpen = sections.includes(value);
    if (isSectionOpen) {
      sections = sections.filter((element) => element !== value);
    } else {
      sections.push(value);
    }
    setDisplaySections(sections);
  };

  return (
    <div className="qc-contact-list-wrapper">
      {viewData.map((data, index) => {
        const isOpen = displaySections.includes(data.id);
        return (
          <SubContactSection
            onCardClick={handleDisplaySections}
            key={index}
            {...data}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

const SubContactSection = ({
  title,
  contacts = [],
  isOpen,
  id,
  onCardClick = noop,
}) => {
  const onClick = () => onCardClick(id);
  return (
    <div className="qc-contact-list">
      <div className="qc-cl-content" onClick={onClick}>
        <div className="qc-cl-title">
          <div>{title}</div>
          <Badge number={contacts.length} />
        </div>
        <img
          alt="arrow"
          className={`qc-cl-arrow ${isOpen ? `qc-cl-a-active` : ''}`}
          src={upArrow}
        />
      </div>
      <div className={`qc-cl-wrapper ${isOpen ? 'active' : ''}`}  >
        {contacts?.map((el, index) => {
          return <Contact key={index} {...el} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
