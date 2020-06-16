import React from "react";

function Contact() {
  return (
    <div className="route-div">
      <div style={Styles.contact}>
        <div>
          <a
            href="mailto:shobhit5@hotmail.com"
            title="shobhit5@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-hover" style={Styles.contactBtn}>
              <span className="large-text">Email</span>
            </button>
          </a>
        </div>
        <div>
          <a
            href="tel:+31644777939"
            title="Call: +31 644 777 939"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-hover" style={Styles.contactBtn}>
              <span className="large-text">Phone</span>
            </button>
          </a>
        </div>
      </div>
      <div style={Styles.contact}>
        <div className="btn-div">
          <a
            href="https://github.com/shob0"
            title="https://github.com/shob0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-hover" style={Styles.contactBtn}>
              <span className="large-text">Github</span>
            </button>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/shobhit-singh-1b7855a7/"
            title="https://www.linkedin.com/in/shobhit-singh-1b7855a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-hover" style={Styles.contactBtn}>
              <span className="large-text">LinkedIn</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

const Styles = {
  contact: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "60px",
  },
  contactBtn: {
    height: "100px",
    minHeight: "max-content",
    minWidth: "-webkit-fill-available",
    border: "none",
    textDecoration: "underline",
  },
};

export default Contact;
