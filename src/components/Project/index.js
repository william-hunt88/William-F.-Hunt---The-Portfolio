import React from "react";

function Project({ currentProject }) {
  console.log(currentProject.boxNum);
  return (
      <img className="box-image" src={require(`../../assets/images/box6.jpg`).default}></img>
  );
}

export default Project;
