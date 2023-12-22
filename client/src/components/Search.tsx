import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Search.css";
import rest from "../apiRoutes/rest";

function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("aab123");
  const [bubbleDisplay, setBubbleDisplay] = useState(<div></div>);
  const acc_id = location["state"][0];

  const handleSearch = async () => {
    const response = await rest("GET", [searchTerm], 5);
    if (response[0] == 200) {
      navigate(response[1]["data"]["attributes"]["isbn"], {
        state: response[1]["data"]["attributes"]["isbn"],
      });
    } else if (response[0] == 500) {
      setBubbleDisplay(
        <div>
          <p>Internal server error</p>
        </div>
      );
    } else {
      setBubbleDisplay(
        <div>
          <p>Textbook does not exist</p>
        </div>
      );
    }
  };

  const handleMyPage = async () => {
    navigate("myPage", { state: acc_id });
  };

  return (
    <div>
      <p onClick={handleMyPage}>My writings</p>
      <div className="search-div">
        <input
          className="input-box"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div>{bubbleDisplay}</div>
    </div>
  );
}

export default Search;
