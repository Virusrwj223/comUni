import React, { useState } from "react";
import "./FloatingButton.css"; // Import your CSS file for styling
import Popup from "./Popup";

const FloatingButton = ({ id, params }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  if (id == "Questions") {
    return (
      <>
        {
          <div className="floating-button">
            <button onClick={openPopup}>Open Popup</button>
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
              id={id}
              params={params}
            />
          </div>
        }
      </>
    );
  } else if (id == "Discussions") {
    return (
      <>
        {
          <div className="floating-button">
            <button onClick={openPopup}>Open Popup</button>
            <Popup
              isOpen={isPopupOpen}
              onClose={closePopup}
              id={id}
              params={params}
            />
          </div>
        }
      </>
    );
  }
};

export default FloatingButton;
