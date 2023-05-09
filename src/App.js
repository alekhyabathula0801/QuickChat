import React from "react";
import { Provider } from "react-redux";
import store from "./dataLayer/store";
import "./App.css";
import Message from "./components/Message";
import Contact from "./components/Contact";
import UserInfo from "./components/UserInfo";
import ContactInfo from "./components/ContactInfo";
import ShareLink from "./components/ShareLink";
import UserMessage from "./components/UserMessage";
import WeekActivity from "./components/WeekActivity/WeekActivity";
import FooterAction from "./components/InputBox";

function App() {
  return (
    <Provider store={store}>
      <Message
        title={"Hey Bill, nice to meet you"}
        backgroundColor="#1A233C"
        color="white"
      />
      <Contact
        isActive
        number={2}
        title={"Henry Boyd"}
        icon={
          "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Free-Sunflower-Unique-Whatsapp-DP-Images-Pics-Download-1.jpg"
        }
      />
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
      <UserMessage
        title={"Hey Bill, nice to meet you"}
        subtext={"9h ago"}
        icon={
          "https://www.goodmorningimagesdownload.com/wp-content/uploads/2021/12/Free-Sunflower-Unique-Whatsapp-DP-Images-Pics-Download-1.jpg"
        }
      />
      <FooterAction />
      <WeekActivity />
      <ShareLink />
    </Provider>
  );
}

export default App;
