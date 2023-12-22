import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ page }) {
  const navigate = useNavigate();
  if (page == "chapterLoading") {
    return (
      <nav>
        <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Home
        </p>
      </nav>
    );
  } else if (page == "chapter") {
    return (
      <nav>
        <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Home
        </p>
      </nav>
    );
  } else if (page == "question") {
    return (
      <nav>
        <p onClick={() => navigate(-2)} style={{ cursor: "pointer" }}>
          Home
        </p>
        <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Chapters
        </p>
      </nav>
    );
  } else if (page == "discussion") {
    return (
      <nav>
        <p onClick={() => navigate(-3)} style={{ cursor: "pointer" }}>
          Home
        </p>
        <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Questions
        </p>
        <p onClick={() => navigate(-2)} style={{ cursor: "pointer" }}>
          Chapters
        </p>
      </nav>
    );
  } else if (page == "myPage") {
    return (
      <nav>
        <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
          Home
        </p>
      </nav>
    );
  }
}

export default NavBar;
