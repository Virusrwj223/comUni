import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function QuestionList() {
  const location = useLocation();
  const [questionData, setQuestionData] = useState([[[]]]);
  const navigate = useNavigate();
  const data = location["state"]["data"];
  const qnId_arr: Number[] = [];

  async function handleQuestionClick(qnID: String) {
    console.log(qnID);
    try {
      const response = await fetch(
        `http://localhost:3000/api/v2/discussions/${qnID}`
      );
      if (response.ok) {
        const json = await response.json();
        navigate(String(qnID), {
          state: json,
        });
      } else {
        throw response;
      }
    } catch (e) {
      console.log(e);
    }
  }

  for (let i = 0; i < data.length; i++) {
    qnId_arr.push(parseInt(data[i]["id"]));
  }
  useEffect(() => {
    const fetchQns = async () => {
      const qn_data = await Promise.all(
        qnId_arr.map(async (num) => {
          const response = await fetch(
            `http://localhost:3000/api/v1/questions/${num}`
          );
          return await response.json();
        })
      );
      const parsed_qn = qn_data.map((data) => {
        return [
          data["data"]["attributes"]["questionHead"],
          data["data"]["attributes"]["questionBlurb"],
          data["data"]["id"],
        ];
      });
      setQuestionData(parsed_qn);
    };
    fetchQns();
  }, []);

  console.log(questionData);

  return (
    <div>
      <NavBar />
      <h1>Questions</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {questionData.map((dataPoint) => {
          /*
          const handleButtonClick = async (value: number) => {
            getQuestions(parseInt(textbookId), value + 1);
          };
          */
          return (
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                margin: "10px",
                borderRadius: "8px",
                textAlign: "center",
              }}
              onClick={() => handleQuestionClick(String(dataPoint[2]))}
            >
              <h3>{dataPoint[0]}</h3>
              <p>{dataPoint[1]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionList;
