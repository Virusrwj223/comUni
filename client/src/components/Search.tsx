import React, { useEffect, useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [textbookData, setTextbook] = useState("");

  const handleSearch = async () => {
    //await loadTextbook();
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/textbooks/dab123"
      );
      if (response.ok) {
        const json = await response.json();
        console.log(json);
        setTextbook(json);
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
