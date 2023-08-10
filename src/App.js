import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserConversations from "./pages/UserConversations";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/conversations" element={<UserConversations />} />
    </Routes>
  );
};

export default App;
