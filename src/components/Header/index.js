import {React, useState} from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        William Felix Hunt
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#about" onClick = {() => props.setPortfolioSelected(false) & props.setContactSelected(false) & props.setResumeSelected(false)}>
            About Me <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="#my-work" onClick = {() => props.setPortfolioSelected(true) & props.setContactSelected(false) & props.setResumeSelected(false) }>
            My Work
          </a>
          <a className="nav-item nav-link" href="#contact-form" onClick = {() => props.setContactSelected(true) & props.setPortfolioSelected(false) & props.setResumeSelected(false)}>
            Contact
          </a>
          <a className="nav-item nav-link" href="#resume" onClick = {() => props.setContactSelected(false) & props.setPortfolioSelected(false) & props.setResumeSelected(true)}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
