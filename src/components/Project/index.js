import React from "react";

function Project({ currentProject }) {
  console.log(currentProject.name);
  return (
    <div className="proj-margin">
      <div className={`grid-box ${currentProject.boxNum}`}>
        <div className="projDeets">
          <h2>
          <a href={currentProject.githubLink}>
            <i class="bi bi-github"></i>
          </a>
          </h2>
          <h2>{currentProject.name}</h2>
          <div>
            <img href={`./assets/images/${currentProject.boxNum}`} alt="alt"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
