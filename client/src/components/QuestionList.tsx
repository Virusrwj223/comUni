import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import FloatingButton from "../widgets/FloatingButton";
import DeleteButton from "../widgets/DeleteButton";
import EditButton from "../widgets/EditButton";
import rest from "../apiRoutes/rest";

function QuestionList() {
  const location = useLocation();
  const [questionData, setQuestionData] = useState([[[]]]);
  const navigate = useNavigate();
  const data = location["state"][1]["data"];
  const params = location["state"][0];
  const qnId_arr: Number[] = [];
  async function handleQuestionClick(qnID: String) {
    const response = await rest("GET", [qnID], 3);
    if (response[0] == 200) {
      navigate(String(qnID), {
        state: [[params[0], qnID], response[1]],
      });
    } else {
      console.log(response[1]);
    }
  }

  for (let i = 0; i < data.length; i++) {
    qnId_arr.push(parseInt(data[i]["id"]));
  }
  useEffect(() => {
    const fetchQns = async () => {
      const qn_data = await Promise.all(
        qnId_arr.map(async (num) => {
          const response = await rest("GET", [num], 4);

          return await response[1]; //.json();
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

  return (
    <div>
      <NavBar page="question" />
      <h1>Questions</h1>
      <div
        style={{
          display: "grid",
          flexWrap: "wrap",

          height: "100%",
        }}
      >
        {questionData.map((dataPoint) => {
          return (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div
                style={{ justifyContent: "center" }}
                onClick={() => handleQuestionClick(String(dataPoint[2]))}
              >
                <h3>{dataPoint[0]}</h3>
                <p>{dataPoint[1]}</p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <DeleteButton id="Questions" params={dataPoint[2]} />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <EditButton id="Questions" params={[params, dataPoint]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FloatingButton id="Questions" params={params} />
    </div>
  );
}

export default QuestionList;
