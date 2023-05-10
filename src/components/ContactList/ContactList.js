import React, { useState } from "react";
import Badge from "../Badge";
import Contact from "../Contact";
import { CONTACT_LIST } from "./constants";
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";
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
          className="qc-cl-arrow"
          src={isOpen ? upArrow : downArrow}
        />
      </div>
      {isOpen &&
        contacts?.map((el, index) => {
          return <Contact key={index} {...el} />;
        })}
    </div>
  );
};

export default ContactList;
