import React, { useState } from "react";
import Popup from "./Popup";
import QuestionList from "../components/QuestionList";
import DiscussionList from "../components/DiscussionList";
import { Navigate } from "react-router-dom";

const EditButton = ({ id, params }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    if (id === "Questions") {
      return <QuestionList />;
    } else {
      return <DiscussionList />;
    }
  };
  let new_id = "QuestionsEdit";
  if (id === "Discussions") {
    new_id = "DiscussionsEdit";
  }

  return (
    <>
      {
        <div>
          <button onClick={openPopup}>Edit</button>
          <Popup
            isOpen={isPopupOpen}
            onClose={closePopup}
            id={new_id}
            params={params}
          />
        </div>
      }
    </>
  );
};

export default EditButton;
