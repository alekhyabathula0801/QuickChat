import { createAction, createReducer } from "@reduxjs/toolkit";
import { get } from "lodash-es";
import { USER_CONVERSATIONS } from "../../components/Conversations/constants";

const MODULE_PREFIX = "[ QUICKCHAT CONVERSATIONS ]";

const ACTIONS = {
  setConversations: `${MODULE_PREFIX} setConversations`,
};

// actions
export const setConversations = createAction(ACTIONS.setConversations);

// selector
export const getConversations = (state) => {
  const conversations = get(state, "conversations.conversations", {});
  return conversations;
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
});
