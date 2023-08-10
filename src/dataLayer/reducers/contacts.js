import { createAction, createReducer } from "@reduxjs/toolkit";
import { get } from "lodash-es";
import { CONTACT_LIST } from "../../components/ContactList/constants";

const MODULE_PREFIX = "[ QUICKCHAT CONTACTS ]";

const ACTIONS = {
  setContacts: `${MODULE_PREFIX} setContacts`,
  setSelectedContact: `${MODULE_PREFIX} setSelectedContact`,
};

// actions
export const setContacts = createAction(ACTIONS.setContacts);
export const setSelectedContact = createAction(ACTIONS.setSelectedContact);

// selectors
export const getContactsList = (state) => {
  const contactsList = get(state, "contacts.contactsList", []);
  return contactsList;
};

export const getSelectedContact = (state) => {
  const selectedContact = get(state, "contacts.selectedContact", {});
  return selectedContact;
};

// initial state
const initialState = {
  contactsList: CONTACT_LIST,
  selectedContact: CONTACT_LIST[0],
};

// reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(setContacts, (state, action) => {
    state.contactsList = action.payload;
  });
  builder.addCase(setSelectedContact, (state, action) => {
    state.selectedContact = action.payload;
  });
});
