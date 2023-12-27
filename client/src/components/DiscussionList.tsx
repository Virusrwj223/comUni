import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import FloatingButton from "../widgets/FloatingButton";
import "../styles/DiscussionList.css";
import rest from "../apiRoutes/rest";

function DiscussionList() {
  const [accName, setAccName] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const data = location["state"][1]["data"];
  const params = location["state"][0];
  useEffect(() => {
    const fetchAcc = async () => {
      const acc_data = await Promise.all(
        data.map(async (point) => {
          const acc_id = point["attributes"]["account_id"];
          const response = await rest("GET", [acc_id], 11);
          const acc_name = response[1]["data"]["attributes"]["name"];
          setAccName(acc_name);
        })
      );
      setLoading(true);
    };
    fetchAcc();
  }, []);

  if (!loading) {
    return (
      <div>
        <h2>loading</h2>
      </div>
    );
  } else {
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
                  <hr className="between" />
                  <p>{accName}</p>
                </div>
              );
            }
          )}
        </div>
        <FloatingButton id="Discussions" params={params} />
      </div>
    );
  }
}

export default DiscussionList;
