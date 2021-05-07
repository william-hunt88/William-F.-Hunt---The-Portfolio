import Project from "../Project";
import projects from "../../utils/projects.json";

function Portfolio(currentProject) {
  console.log(currentProject.boxNum)
  return (
    <section id = "my-work">
      <h2> My Work: </h2>
      <div className = "my-work-container">
        {projects.map((project, i, currentProject) => (
          <div className = {currentProject.boxNum} key={i}>
            <Project currentProject={project}></Project>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
