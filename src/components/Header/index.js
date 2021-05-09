import { React, useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">William Felix Hunt</Navbar.Brand>
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
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/">
    //     William Felix Hunt
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNavAltMarkup"
    //     aria-controls="navbarNavAltMarkup"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <a
    //           className="nav-link active"
    // //           href="#about"
    //           onClick={() =>
    //             props.setPortfolioSelected(false) &
    //             props.setContactSelected(false) &
    //             props.setResumeSelected(false)
    //           }
    //         >
    //           About Me <span className="sr-only"></span>
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className="nav-item nav-link"
    //           href="#my-work"
    // onClick={() =>
    //   props.setPortfolioSelected(true) &
    //   props.setContactSelected(false) &
    //   props.setResumeSelected(false)
    // }
    //         >
    //           My Work
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className="nav-link"
    //           href="#contact-form"
    //           onClick={() =>
    //             props.setContactSelected(true) &
    //             props.setPortfolioSelected(false) &
    //             props.setResumeSelected(false)
    //           }
    //         >
    //           Contact
    //         </a>
    //       </li>
    //       <li className="nav-item">
    //         <a
    //           className="nav-item nav-link"
    //           href="#resume"
    // onClick={() =>
    //   props.setContactSelected(false) &
    //   props.setPortfolioSelected(false) &
    //   props.setResumeSelected(true)
    // }
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Header;
