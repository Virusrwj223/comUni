import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Search.css";
import rest from "../apiRoutes/rest";

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("aab123");
  const [bubbleDisplay, setBubbleDisplay] = useState(<div></div>);

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
          Search
        </button>
      </div>
      <div>{bubbleDisplay}</div>
    </div>
  );
}

export default Search;
