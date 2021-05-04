import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a href="/">
          <span>William Felix Hunt</span>
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
