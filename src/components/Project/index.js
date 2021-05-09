import React from "react";

function Project({ currentProject }) {
  console.log(currentProject.name);
  return (
    <div className="proj-margin">
      <div className={`grid-box ${currentProject.boxNum}`}>
        <div className="projDeets">
          <h2>
          <a href={currentProject.githubLink}>
            <i className="bi bi-github"></i>
          </a>
          </h2>
          <h2>
          <a href={currentProject.deployedLink}>{currentProject.name}</a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
