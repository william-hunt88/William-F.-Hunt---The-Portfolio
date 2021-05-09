import { React, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Navbar expand="lg" className="nav">
      <Navbar.Brand
        href="#about"
        onClick={() =>
          props.setPortfolioSelected(false) &
          props.setContactSelected(false) &
          props.setResumeSelected(false)
        }
      >
        William Felix Hunt
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#about"
            onClick={() =>
              props.setPortfolioSelected(false) &
              props.setContactSelected(false) &
              props.setResumeSelected(false)
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#my-work"
            onClick={() =>
              props.setPortfolioSelected(true) &
              props.setContactSelected(false) &
              props.setResumeSelected(false)
            }
          >
            My Work
          </Nav.Link>
          <Nav.Link
            href="#contact-form"
            onClick={() =>
              props.setPortfolioSelected(false) &
              props.setContactSelected(true) &
              props.setResumeSelected(false)
            }
          >
            Contact Me
          </Nav.Link>
          <Nav.Link
            href="#resume"
            onClick={() =>
              props.setContactSelected(false) &
              props.setPortfolioSelected(false) &
              props.setResumeSelected(true)
            }
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
