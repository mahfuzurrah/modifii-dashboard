import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/Login";
import MainLayout from "./Components/Layout/MainLayout";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/to" element={<LogIn />} />
          <Route path="/" element={<MainLayout/>} />
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
