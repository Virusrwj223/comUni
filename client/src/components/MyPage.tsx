import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import rest from "../apiRoutes/rest";
import DeleteButton from "../widgets/DeleteButton";
import EditButton from "../widgets/EditButton";
import NavBar from "./NavBar";
import "../styles/MyPage.css";

function MyPage() {
  const location = useLocation();
  const [questionData, setQuestionData] = useState([[[]]]);
  const [discussionData, setDiscussionsData] = useState([[[]]]);
  const acc_id = 1; //location["state"];

  useEffect(() => {
    const fetchContributions = async () => {
      const response = await rest("GET", [acc_id], 11);
      const questions_data =
        response[1]["data"]["relationships"]["questions"]["data"];
      const discussions_data =
        response[1]["data"]["relationships"]["discussions"]["data"];

      const qnID_arr = [];
      const disID_arr = [];
      for (let i = 0; i < questions_data.length; i++) {
        qnID_arr.push(questions_data[i]["id"]);
      }
      for (let i = 0; i < discussions_data.length; i++) {
        disID_arr.push(discussions_data[i]["id"]);
      }

      const fetchQns = async () => {
        const qn_data = await Promise.all(
          qnID_arr.map(async (num) => {
            const response = await rest("GET", [num], 4);

            return await response[1]; //.json();
          })
        );
        const parsed_qn = qn_data.map((data) => {
          return [
            data["data"]["attributes"]["questionHead"],
            data["data"]["attributes"]["questionBlurb"],
            data["data"]["id"],
            data["data"]["attributes"]["textbook_id"],
            data["data"]["attributes"]["chapter"],
            acc_id,
          ];
        });
        setQuestionData(parsed_qn);
      };
      const fetchDiss = async () => {
        const diss_data = await Promise.all(
          disID_arr.map(async (num) => {
            const response = await rest("GET", [num], 8);

            return await response[1]; //.json();
          })
        );
        const parsed_qn = diss_data.map((data) => {
          return [
            data["data"]["attributes"]["response"],
            data["data"]["id"],
            data["data"]["attributes"]["textbook_id"],
            data["data"]["attributes"]["question_id"],
            acc_id,
          ];
        });
        setDiscussionsData(parsed_qn);
      };

      await fetchQns();
      await fetchDiss();
    };
    fetchContributions();
  }, []);

  return (
    <div>
      <h1>MyPage</h1>
      <NavBar page="myPage" />
      <h2>Questions</h2>
      <div className="container">
        {questionData.map((dataPoint) => {
          return (
            <div className="card">
              <div style={{ justifyContent: "center" }}>
                <h3>{dataPoint[0]}</h3>
                <p>{dataPoint[1]}</p>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <DeleteButton id="Questions" params={dataPoint[2]} />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <EditButton id="Questions" params={dataPoint} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>Discussions</h2>
      <div className="container">
        {discussionData.map((dataPoint) => {
          return (
            <div className="card">
              <p>{dataPoint[0]}</p>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "5px" }}>
                  <DeleteButton id="Discussions" params={dataPoint[1]} />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <EditButton id="Discussions" params={dataPoint} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyPage;
