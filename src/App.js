import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/Login";
import Contacts from "./Pages/Contacts";

function App() {
  const [activeKey, setActiveKey] = useState(
    localStorage.getItem("activeKey") || "dashboard"
  );

  useEffect(() => {
    localStorage.setItem("activeKey", activeKey);
  }, [activeKey]);

  useEffect(() => {
    // Set default activeKey to "dashboard" on first load
    if (!localStorage.getItem("activeKey")) {
      setActiveKey("dashboard");
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
