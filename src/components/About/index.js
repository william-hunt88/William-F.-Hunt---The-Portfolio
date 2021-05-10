import React from 'react'
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <Container id="about" className="about">
      <Row>
        <Col md={12}>
        <img src="me.jpg" alt="alt"/>
        </Col>
        <Col md={12}>
        <p>I am a web developer from Nashville, Tn. Here comes some Lorem ipsum 
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat to round it out.
      </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;