import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "./Search";
import LogReg from "./LogReg";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LogReg />} />
      <Route path="/searchbar" element={<h1>tessssst</h1>} />
    </Routes>
  );
}

export default AppRoutes;
