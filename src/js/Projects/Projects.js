import React from "react";
import Project from "./Project";
import { projectList } from "../../../resources/projectList";

function Projects() {
  return (
    <div className="route-div" style={{ textAlign: "center" }}>
      <h2>my projects and blogs</h2>
      <hr style={{ width: "300px", marginBottom: "3rem" }} />
      <div className="iframe">
        {projectList.map((val, index) => {
          return (
            <Project
              key={index}
              src={val.url}
              title={val.title}
              descirption={val.descirption}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
