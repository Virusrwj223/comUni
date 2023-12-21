import React, { useState } from "react";
import Popup from "./Popup";

const EditButton = ({ id, params }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  if (id === "Questions") {
    return (
      <>
        {
          <div>
            <button onClick={openPopup}>Edit</button>
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
              id="QuestionsEdit"
              params={params}
            />
          </div>
        }
      </>
    );
  } else if (id === "Discussions") {
    return (
      <>
        {
          <div>
            <button onClick={openPopup}>Edit</button>
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
              id="DiscussionsEdit"
              params={params}
            />
          </div>
        }
      </>
    );
  }
};

export default EditButton;
