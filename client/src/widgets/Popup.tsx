import React, { useState } from "react";
import "./Popup.css"; // You can create a CSS file for styling

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
      try {
        const response = await fetch(`http://localhost:3000/api/v1/questions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          const json = await response.json();
          console.log(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log(e);
      }
    } else if (id == "QuestionsEdit") {
      const textbook_id = params[0][0];
      const chapter = params[0][1];
      let new_headline = params[1][0];
      let new_message = params[1][1];
      const qID = params[1][2];
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
        account_id: 1,
      };
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/questions/${qID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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
      const textbook_id = params[0];
      const question_id = params[1];
      const formData = {
        textbook_id: textbook_id,
        question_id: question_id,
        response: message,
        account_id: 1,
      };

      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/discussions`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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
    } else if (id == "DiscussionsEdit") {
      const dID = params[1]["id"];
      const textbook_id = params[1]["attributes"]["textbook_id"];
      const question_id = params[1]["attributes"]["question_id"];
      let new_message = params[1]["attributes"]["response"];
      const account_id = params[1]["attributes"]["account_id"];

      if (message != "") {
        new_message = message;
      }
      const formData = {
        textbook_id: textbook_id,
        question_id: question_id,
        response: new_message,
        account_id: account_id,
      };

      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/discussions/id=${dID}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
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

    // Close the popup after submission
    onClose();
  };
  if (id == "Questions") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <label>
              Headline:
              <textarea
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else if (id == "QuestionsEdit") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <label>
              Headline:
              <textarea
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </label>
          </form>
          <form>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else if (id == "Discussions") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else if (id == "DiscussionsEdit") {
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="popup-content">
          <span className="close-btn" onClick={onClose}>
            &times;
          </span>
          <form>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Popup;
