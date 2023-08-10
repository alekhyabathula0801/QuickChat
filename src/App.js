import React from "react";
import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./navigation/routeConstants";
import ContactDetails from "./pages/ContactDetails";
import Dashboard from "./pages/Dashboard";
import UserActivity from "./pages/UserActivity";
import UserConversations from "./pages/UserConversations";

const App = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.home} element={<Dashboard />} />
      <Route path={APP_ROUTES.conversations} element={<UserConversations />} />
      <Route path={APP_ROUTES.userActivity} element={<UserActivity />} />
      <Route path={APP_ROUTES.contactDetails} element={<ContactDetails />} />
    </Routes>
  );
};

export default App;
