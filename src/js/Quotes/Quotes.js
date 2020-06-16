import React, { useEffect, useState } from "react";
import "./Quotes.css";

function Quotes(props) {
  const [quoteObj, updateQuoteObj] = useState("");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        updateQuoteObj(data);
      });
  }, []);

  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <div className="modal-header">
          <img
            src={quoteObj.icon_url}
            alt="chuck-norris-cartoon"
            className="quotes-image"
          />
          <h2>Did you know?</h2>
          <button
            className="btn modal-btn"
            type="button"
            onClick={() => {
              props.updateQuote(false);
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
              chuck norris
            </a>
          </sub>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
