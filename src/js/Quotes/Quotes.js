import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Quotes.css";

function Quotes() {
  const [quoteObj, updateQuoteObj] = useState("");
  const loc = useLocation();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        updateQuoteObj(data);
      });
    if (loc.pathname !== "/") {
      document.getElementById("modal").style.display = "none";
    }
  }, []);
  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Did you know!!</h2>
          <button
            className="btn modal-btn"
            type="button"
            onClick={() => {
              document.getElementById("modal").style.display = "none";
            }}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <p>{quoteObj.value}</p>
          <sub style={{ float: "right", fontSize: "0.9rem", bottom: "0" }}>
            source:{" "}
            <a
              href="https://api.chucknorris.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chuck Norris
            </a>
          </sub>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
