import React from "react";

function Project(props) {
  return (
    <div className="post">
      <a
        href={props.src}
        target="_blank"
        rel="noopener noreferrer"
        title={props.descirption}
        className="project-link"
      >
        {props.title}
      </a>
    </div>
  );
}

export default Project;
