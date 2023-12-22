import React, { useState } from "react";
import "../styles/FloatingButton.css"; // Import your CSS file for styling
import Popup from "./Popup";
import { FaPlus } from "react-icons/fa";

const FloatingButton = ({ id, params }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      {
        <div className="floating-button">
          <button onClick={openPopup}>
            <FaPlus />
          </button>
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
};

export default FloatingButton;
