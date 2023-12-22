import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ page }) {
  const navigate = useNavigate();
  if (page == "chapterLoading") {
    return (
      <nav>
        <p onClick={() => navigate(-1)}>test</p>
      </nav>
    );
  } else if (page == "chapter") {
    return (
      <nav>
        <p onClick={() => navigate(-1)}>test</p>
      </nav>
    );
  } else if (page == "question") {
    return (
      <nav>
        <p onClick={() => navigate(-2)}>test</p>
        <p onClick={() => navigate(-1)}>chapters</p>
      </nav>
    );
  } else if (page == "discussion") {
    return (
      <nav>
        <p onClick={() => navigate(-3)}>test</p>
        <p onClick={() => navigate(-1)}>questions</p>
        <p onClick={() => navigate(-2)}>chapters</p>
      </nav>
    );
  } else if (page == "myPage") {
    return (
      <nav>
        <p onClick={() => navigate(-1)}>test</p>
      </nav>
    );
  }
}

export default NavBar;
