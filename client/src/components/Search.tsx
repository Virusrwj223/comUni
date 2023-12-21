import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    //await loadTextbook();
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/textbooks/aab123"
      );
      if (response.ok) {
        const json = await response.json();
        navigate(json["data"]["attributes"]["isbn"], {
          state: json["data"]["attributes"]["isbn"],
        });
        //setTextbookId(json["data"]["id"]);
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          padding: "5px",
          marginRight: "5px",
          color: "#fff",
          backgroundColor: "#555",
          border: "none",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "5px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
