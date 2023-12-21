import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function ChapterDir() {
  const [chapters, setChapters] = useState("");
  const [textbookId, setTextbookId] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isbn = location["state"];

  async function getQuestions(id: number, chapter: number) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v2/questions/${id}?chapter=${chapter}`
      );
      if (response.ok) {
        const json = await response.json();
        navigate(String(chapter), {
          state: [[id, chapter, isbn], json], //json,
        });
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/textbooks/${isbn}`
        );
        if (response.ok) {
          const json = await response.json();
          setChapters(json["data"]["attributes"]["chapters"]);
          setTextbookId(json["data"]["id"]);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
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
