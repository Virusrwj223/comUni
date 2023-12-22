import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import FloatingButton from "../widgets/FloatingButton";
import "../styles/DiscussionList.css";

function DiscussionList() {
  const location = useLocation();

  const data = location["state"][1]["data"];
  const params = location["state"][0];
  return (
    <div>
      <NavBar page="discussion" />
      <h1>Discussions</h1>
      <div className="container">
        {data.map(
          (dataPoint: {
            [x: string]: {
              [x: string]:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            };
          }) => {
            return (
              <div className="card">
                <p>{dataPoint["attributes"]["response"]}</p>
              </div>
            );
          }
        )}
      </div>
      <FloatingButton id="Discussions" params={params} />
    </div>
  );
}

export default DiscussionList;
