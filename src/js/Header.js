import React from "react";
import { useHistory } from "react-router-dom";

import resume from "../../resources/resume.pdf";

function Header() {
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
      <header>
        <button
          type="button"
          className="nav-bar-button textColor btn-hover"
          title="Home Page"
          style={{ transform: "scale(1)" }}
          onClick={() => {
            history.push("/");
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div className="name">
              <p>shobhit</p>
            </div>
            <div style={{ marginLeft: "60px" }} className="name">
              <p>singh</p>
            </div>
          </div>
        </button>
        <div>
          <nav>
            <div className="menu-div">
              <button
                type="button"
                aria-label="toggle menu"
                className="menu-btn"
                onClick={openMenuCard}
                title="Menu"
                style={{ color: "black", transform: "scale(1.5)" }}
              >
                &#x2630;
              </button>
            </div>
            <div className="nav" id="nav">
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
              style={{ transform: "scale(2)" }}
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
              style={{ transform: "scale(2.5)" }}
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
                style={{ color: "red", transform: "scale(1.12)" }}
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
