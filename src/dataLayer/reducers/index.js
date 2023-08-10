import { combineReducers } from "redux";
import contacts from "./contacts";
import conversations from "./conversations";
import userConfig from "./userConfig";

export default combineReducers({
  contacts,
  userConfig,
  conversations,
});
