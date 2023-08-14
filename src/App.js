import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/Login";
import Contacts from "./Pages/Contacts";

function App() {
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
