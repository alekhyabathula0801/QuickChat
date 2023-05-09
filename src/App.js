import React from "react";
import { Provider } from "react-redux";
import store from "./dataLayer/store";
import "./App.css";
import UserInfo from "./components/UserInfo";
import ContactInfo from "./components/ContactInfo";
import ShareLink from "./components/ShareLink";
import WeekActivity from "./components/WeekActivity/WeekActivity";
import FooterAction from "./components/InputBox";
import ContactList from "./components/ContactList";
import Conversations from "./components/Conversations";

function App() {
  return (
    <Provider store={store}>
      <Conversations />
      <ContactList />
      <UserInfo
        title={"Bill Bradford"}
        subtitle="Lead UX/UI Designer"
        status={"Active"}
        icon={
          "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Free-Sunflower-Unique-Whatsapp-DP-Images-Pics-Download-1.jpg"
        }
      />
      <ContactInfo
        shortName={"HB"}
        name="Henry Boyd"
        email={"henryboyd@gmail.com"}
      />
      <FooterAction />
      <WeekActivity />
      <ShareLink />
    </Provider>
  );
}

export default App;
