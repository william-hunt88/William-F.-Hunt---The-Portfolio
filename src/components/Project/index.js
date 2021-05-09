import React from "react";

function Project({currentProject}) {
  console.log(currentProject.name)
  return (
    <div className="projWrap">
      <h2 className="projName">{currentProject.name}</h2>
    </div>
  );
}

export default Project;
