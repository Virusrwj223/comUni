import React, { useState } from "react";

const DeleteButton = ({ id, params }) => {
  const handleDeleteClick = async () => {
    if (id == "Questions") {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/questions/${params}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const json = await response.json();
          console.log(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
      }
    } else if (id == "Discussions") {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/discussions/id=${params}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const json = await response.json();
          console.log(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (id == "Questions") {
    return (
      <div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  } else if (id == "Discussions") {
    return (
      <div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }
};

export default DeleteButton;
