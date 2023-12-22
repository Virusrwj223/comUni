import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import FloatingButton from "../widgets/FloatingButton";
import DeleteButton from "../widgets/DeleteButton";
import EditButton from "../widgets/EditButton";

function DiscussionList() {
  const location = useLocation();

  const data = location["state"][1]["data"];
  const params = location["state"][0];
  return (
    <div>
      <NavBar page="discussion" />
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
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "5px" }}>
                    <DeleteButton id="Discussions" params={dataPoint["id"]} />
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    <EditButton id="Discussions" params={[params, dataPoint]} />
                  </div>
                </div>
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
