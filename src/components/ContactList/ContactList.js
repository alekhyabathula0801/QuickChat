import { noop } from "lodash-es";
import React, { useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import upArrow from "../../assets/up-arrow.svg";
import {
  getContactsList,
  setSelectedContact,
} from "../../dataLayer/reducers/contacts";
import Badge from "../Badge";
import Contact from "../Contact";
import "./ContactList.scss";
import { getContactListViewData } from "./utils";

const ContactList = (props) => {
  const contacts = useSelector(getContactsList, shallowEqual);
  const viewData = useMemo(() => getContactListViewData(contacts), [contacts]);
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
  const dispatch = useDispatch();
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
          className={`qc-cl-arrow ${isOpen ? `qc-cl-a-active` : ""}`}
          src={upArrow}
        />
      </div>
      <div className={`qc-cl-wrapper ${isOpen ? "active" : ""}`}>
        {contacts?.map((el, index) => {
          const onContactClick = () => {
            dispatch(setSelectedContact(el));
          };
          return <Contact key={index} onClick={onContactClick} {...el} />;
        })}
      </div>
    </div>
  );
};

export default ContactList;
