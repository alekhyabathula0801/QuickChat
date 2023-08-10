import { createAction, createReducer } from "@reduxjs/toolkit";
import { get } from "lodash-es";
import { USER_CONVERSATIONS } from "../../components/Conversations/constants";

const MODULE_PREFIX = "[ QUICKCHAT CONVERSATIONS ]";

const ACTIONS = {
  setConversations: `${MODULE_PREFIX} setConversations`,
  addConversations: `${MODULE_PREFIX} addConversations`,
};

// actions
export const setConversations = createAction(ACTIONS.setConversations);
export const addConversations = createAction(ACTIONS.addConversations);

// selector
export const getConversations = (state) => {
  const conversations = get(state, "conversations.conversations", {});
  return conversations;
};

export const getConversationsById = (state, id) => {
  const conversations = getConversations(state);
  return conversations[id] || [];
};

// initial state
const initialState = {
  conversations: USER_CONVERSATIONS,
};

// reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(setConversations, (state, action) => {
    state.conversations = action.payload;
  });
  builder.addCase(addConversations, (state, action) => {
    const { id, data } = action.payload;
    const updatedData = state.conversations[id] || [];
    updatedData.push(data);
    state.conversations[id] = updatedData;
  });
});
