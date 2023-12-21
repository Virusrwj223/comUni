import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <p onClick={() => navigate("/", { replace: true })}>test</p>
    </nav>
  );
}

export default NavBar;
