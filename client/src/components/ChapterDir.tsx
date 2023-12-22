import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import rest from "../apiRoutes/rest";

function ChapterDir() {
  const [chapters, setChapters] = useState("");
  const [textbookId, setTextbookId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isbn = location["state"];

  async function getQuestions(id: number, chapter: number) {
    const response = await rest("GET", [id, chapter], 1);
    if (response[0] == 200) {
      navigate(String(chapter), {
        state: [[id, chapter, isbn], response[1]], //json,
      });
    } else {
      console.log(response[1]);
    }
  }
  useEffect(() => {
    const fetchChapters = async () => {
      const response = await rest("GET", [isbn], 2);
      if (response[0] == 200) {
        const json = response[1];
        setChapters(json["data"]["attributes"]["chapters"]);
        setTextbookId(json["data"]["id"]);
      } else {
        console.log(response[1]);
      }
    };
    fetchChapters();
  }, []);

  if (!chapters) {
    return (
      <div>
        <NavBar page="chapterLoading" />
        <h2>loading</h2>
      </div>
    );
  } else {
    const display_arr = [];
    for (let i = 0; i < parseInt(chapters); i++) {
      display_arr.push(i);
    }
    return (
      <div>
        <NavBar page="chapter" />
        <h1>Chapters</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {display_arr.map((number) => {
            const handleButtonClick = async (value: number) => {
              getQuestions(parseInt(textbookId), value + 1);
            };
            return (
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <h2>{number + 1}</h2>
                <button onClick={() => handleButtonClick(number)}>
                  Click me
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ChapterDir;
