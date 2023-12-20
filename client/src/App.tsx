import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import LogReg from "./components/LogReg";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogReg />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
