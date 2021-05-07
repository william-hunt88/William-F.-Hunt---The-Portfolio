import Project from "../Project";
import projects from "../../utils/projects.json";

function Portfolio(props) {
  return (
    <section id = "my-work">
      <h2> My Work: </h2>
      <div className = "my-work-container">
        {projects.map((project, i,) => (
          <div className ={`grid-item ${project.boxNum}`} key={i}>
            <Project currentProject={project}></Project>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
