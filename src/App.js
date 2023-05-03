import React from "react";
import { Provider } from "react-redux";
import store from "./dataLayer/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        Hello World
        {/* render app */}
      </div>
    </Provider>
  );
}

export default App;
