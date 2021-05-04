import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Advance-it",
      link: "https://shrouded-beach-19084.herokuapp.com/",
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <section className="my-work" id="my-work">
      <h2 className="section-title"> My Work: </h2>
      {projects.map((project) => {
        <li>
          <Project
            currentProject={currentProject}
          ></Project>
        </li>;
      })}
    </section>
  );
}

export default Portfolio;
