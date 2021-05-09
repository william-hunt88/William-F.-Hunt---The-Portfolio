import Project from "../Project";
import projects from "../../utils/projects.json";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Portfolio(props) {
  return (
    <section id = "my-work">
    <h2> My Work: </h2>
    <Container>
      <Row>
      {projects.map((project, i,) => (
        <Col sm={6} xs={12} md={6} key={i} className="work-col">
          <Project currentProject={project}></Project>
        </Col>
      ))}
      </Row>
    </Container>
  </section>







    // <section id = "my-work">
    //   <h2> My Work: </h2>
    //   <div className = "my-work-container">
    //     {projects.map((project, i,) => (
    //       <div className ={`grid-item ${project.boxNum}`} key={i}>
    //         <Project currentProject={project}></Project>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

export default Portfolio;
