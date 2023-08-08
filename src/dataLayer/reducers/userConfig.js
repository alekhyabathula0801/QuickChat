import { createAction, createReducer } from "@reduxjs/toolkit";
import { get } from "lodash-es";
import { USER_DATA } from "../../components/UserInfo/constants";

const MODULE_PREFIX = "[ QUICKCHAT USER CONFIG ]";

const Actions = {
  setUserData: `${MODULE_PREFIX} setUserData`,
};

// actions
export const setUserData = createAction(Actions.setUserData);

// selector
export const getUserData = (state) => {
  const userData = get(state, "userConfig.userData", {});
  return userData;
};

// initial state
const initialState = {
  userData: USER_DATA,
};

// reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(setUserData, (state, action) => {
    state.userData = action.payload;
  });
});
