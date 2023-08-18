import { createAction, createReducer } from "@reduxjs/toolkit";
import { get } from "lodash-es";
import { USER_DATA } from "../../components/UserInfo/constants";

const MODULE_PREFIX = "[ QUICKCHAT USER CONFIG ]";

const ACTIONS = {
  setUserData: `${MODULE_PREFIX} setUserData`,
  updateUserData: `${MODULE_PREFIX} updateUserData`,
};

// actions
export const setUserData = createAction(ACTIONS.setUserData);
export const updateUserData = createAction(ACTIONS.updateUserData);

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
  builder.addCase(updateUserData, (state, action) => {
    state.userData = { ...state.userData, ...action.payload };
  });
});
