import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

function DiscussionList() {
  const location = useLocation();
  const data = location["state"]["data"];
  return (
    <div>
      <NavBar />
      <h1>Discussions</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  margin: "10px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <p>{dataPoint["attributes"]["response"]}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default DiscussionList;
