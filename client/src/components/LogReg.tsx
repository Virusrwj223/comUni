import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";
import rest from "../apiRoutes/rest";

/*<Navigate to="/search" />*/
function LogReg() {
  const [searchTerm, setSearchTerm] = useState("Hrishira");
  const navigate = useNavigate();

  const handleSearch = async () => {
    const response = await rest("GET", [searchTerm], 9);

    if (response[1]["data"] != null) {
      const acc_id = response[1]["data"]["id"];
      navigate("search", { state: [acc_id] });
    } else {
      const formData = { name: searchTerm };
      const response = await rest("POST", [NaN, formData], 10);
      handleSearch();
    }
  };

  return (
    <div>
      <div className="search-div">
        <input
          className="input-box"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          LogIn
        </button>
      </div>
    </div>
  );
}

export default LogReg;
