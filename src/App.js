import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/a" element={<LogIn />} />
          <Route path="/b" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
