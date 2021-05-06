import Project from "../Project";
import projects from "../../utils/projects.json";

function Portfolio() {
  return (
    <section className="my-work" id="my-work">
      <h2 className="section-title"> My Work: </h2>
      <ul>
        {projects.map((project, i) => (
          <li key={i}>
            <Project currentProject={project}></Project>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
