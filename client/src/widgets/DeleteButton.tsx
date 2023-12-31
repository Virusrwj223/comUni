import React, { useState } from "react";
import rest from "../apiRoutes/rest";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const DeleteButton = ({ id, params }) => {
  const navigate = useNavigate();
  const handleDeleteClick = async () => {
    if (id == "Questions") {
      const response = await rest("DELETE", [params], 4);
    } else if (id == "Discussions") {
      const response = await rest("DELETE", [params], 8);
    }
  };
  return (
    <div>
      <button onClick={handleDeleteClick}>
        <MdDelete />
      </button>
    </div>
  );
};

export default DeleteButton;
