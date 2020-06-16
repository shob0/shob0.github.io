import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Quotes from "./Quotes/Quotes";

import resume from "../../resources/resume.pdf";

function Header() {
  const [showQuote, updateShowQuote] = useState(false);
  let history = useHistory();

  const openMenuCard = () => {
    var menuEle = document.querySelector("#menu");
    menuEle.classList.remove("hidden");
    menuEle.classList.add("open-menu");
  };

  const closeMenu = () => {
    var menuEle = document.querySelector("#menu");
    menuEle.classList.add("hidden");
    menuEle.classList.remove("open-menu");
  };

  const downloadResume = () => {
    window.open(resume, "_blank", "");
  };

  return (
    <div className="header">
      {showQuote === true && <Quotes updateQuote={updateShowQuote} />}
      <header>
        <button
          type="button"
          className="nav-bar-button btn-hover home-btn"
          title="Home Page"
          onClick={() => {
            history.push("/");
          }}
        >
          <div>
            <p className="name">shobhit</p>
            <p className="name" style={{ marginLeft: "60px" }}>
              singh
            </p>
          </div>
        </button>
        <div>
          <nav>
            <div className="menu-div">
              <button
                type="button"
                className="menu-btn"
                onClick={() => {
                  updateShowQuote(true);
                }}
                aria-label="projects button"
              >
                <span style={{ color: "orange" }}>joke?</span>
              </button>
              <button
                type="button"
                aria-label="toggle menu"
                className="menu-btn"
                onClick={openMenuCard}
                title="Menu"
                style={{ transform: "scale(1.5)" }}
              >
                &#x2630;
              </button>
            </div>

            <div className="nav" id="nav">
              <div>
                <button
                  type="button"
                  className="nav-bar-button"
                  onClick={() => {
                    updateShowQuote(true);
                  }}
                  aria-label="projects button"
                >
                  <span style={{ color: "orange" }}>care for a joke!!</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="nav-bar-button textColor"
                  onClick={() => {
                    history.push("/projects");
                  }}
                  aria-label="projects button"
                >
                  <span>projects</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="nav-bar-button textColor"
                  onClick={() => {
                    history.push("/contact");
                  }}
                  aria-label="contact button"
                >
                  <span>contact</span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  style={{ color: "red", transform: "scale(1.12)" }}
                  className="nav-bar-button textColor"
                  onClick={downloadResume}
                  aria-label="resume download button"
                >
                  <span>
                    <b>resume</b>
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="hidden" id="menu">
        <div className="menu-card">
          <div>
            <button
              type="button"
              aria-label="toggle menu"
              className="menu-btn"
              onClick={() => {
                history.push("/");
                closeMenu();
              }}
              style={{ transform: "scale(2)", color: "#2d314e" }}
            >
              Home
            </button>
          </div>
          <div>
            <button
              type="button"
              aria-label="toggle menu"
              className="menu-btn"
              onClick={closeMenu}
              style={{ transform: "scale(2.5)", color: "#2d314e" }}
            >
              X
            </button>
          </div>
        </div>
        <div className="menu-option">
          <ul>
            <li>
              <button
                type="button"
                className="menu-btn open-menu-btn"
                onClick={() => {
                  history.push("/projects");
                  closeMenu();
                }}
                aria-label="projects"
              >
                projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="menu-btn open-menu-btn"
                onClick={() => {
                  history.push("/contact");
                  closeMenu();
                }}
                aria-label="contact button"
              >
                contact
              </button>
            </li>
            <li>
              <button
                type="button"
                style={{ color: "red" }}
                className="menu-btn open-menu-btn"
                onClick={() => {
                  downloadResume();
                  closeMenu();
                }}
                aria-label="resume download button"
              >
                resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
