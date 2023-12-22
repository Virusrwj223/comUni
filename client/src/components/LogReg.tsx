import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogReg.css";
import rest from "../apiRoutes/rest";
import { FaUser } from "react-icons/fa";
/* https://www.youtube.com/watch?v=mefhyo7W3nk */

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
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login/Register</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icon">
            <FaUser />
          </div>

          <button onClick={handleSearch} className="btn">
            LogIn
          </button>
        </div>
      </div>
      <div className="info-text login">
        <h2>Hey There!</h2>
        <p>Let the learning continue</p>
      </div>
    </div>
  );
}

export default LogReg;
