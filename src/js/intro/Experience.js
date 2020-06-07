import React from "react";

/**
 *Title: String
 *Company: String
 *roleName: String
 *Impacts: []
 */
function Experience(props) {
  let imp = props.impact;
  return (
    <div className="experience">
      <div>
        <hr className="divider" />
      </div>
      <strong>{props.title}</strong>
      <div className="">
        <ul>
          {imp.map((imm, ind) => (
            <li key={ind} style={{ listStyle: "none" }}>
              {imm}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
