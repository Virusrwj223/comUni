import React, { useState } from "react";
import "../styles/Popup.css";
import rest from "../apiRoutes/rest";

const Popup = ({ isOpen, onClose, id, params }) => {
  const [message, setMessage] = useState("");
  const [headline, setHeadline] = useState("");

  const handleSubmit = async () => {
    // Handle form submission logic here
    if (id == "Questions") {
      const textbook_id = params[0];
      const chapter = params[1];
      const formData = {
        textbook_id: textbook_id,
        chapter: chapter,
        questionHead: headline,
        questionBlurb: message,
        account_id: 1,
      };
      const response = await rest("POST", [NaN, formData], 6);
    } else if (id == "QuestionsEdit") {
      const textbook_id = params[3];
      const chapter = params[4];
      let new_headline = params[0];
      let new_message = params[1];
      const qID = params[2];
      const acc_id = params[5];
      if (headline != "") {
        new_headline = headline;
      }
      if (message != "") {
        new_message = message;
      }
      const formData = {
        textbook_id: textbook_id,
        chapter: chapter,
        questionHead: new_headline,
        questionBlurb: new_message,
        account_id: acc_id,
      };
      const response = await rest("PATCH", [qID, formData], 4);
    } else if (id == "Discussions") {
      const textbook_id = params[0];
      const question_id = params[1];
      const formData = {
        textbook_id: textbook_id,
        question_id: question_id,
        response: message,
        account_id: 1,
      };
      const response = await rest("POST", [NaN, formData], 7);
    } else if (id == "DiscussionsEdit") {
      const dID = params[1];
      const textbook_id = params[2];
      const question_id = params[3];
      let new_message = params[0];
      const account_id = params[4];

      if (message != "") {
        new_message = message;
      }
      const formData = {
        textbook_id: textbook_id,
        question_id: question_id,
        response: new_message,
        account_id: account_id,
      };

      const response = await rest("PATCH", [dID, formData], 8);
    }

    onClose();
  };
  if (id == "Questions" || id == "QuestionsEdit") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <textarea
              placeholder="Headline"
              className="textArea-headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </form>
          <form>
            <textarea
              placeholder="Message"
              className="textArea-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
          <button type="button" onClick={handleSubmit} className="fbtn">
            Submit
          </button>
        </div>
      </div>
    );
  } else if (id == "Discussions" || id == "DiscussionsEdit") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <textarea
              placeholder="Message"
              className="textArea-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </form>
          <button type="button" onClick={handleSubmit} className="fbtn">
            Submit
          </button>
        </div>
      </div>
    );
  }
};

export default Popup;
