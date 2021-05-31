import React from "react";
import Button from "react-bootstrap/Button"
import download from "./resume(placeholder).pdf"

function Resume() {
  return (
    <div>
      <Button size = "lg" href={download} download="WilliamFelixHunt - Resume2021">
      Download
      </Button>
      <h2> Front-End Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Bootsrap</li>
      </ul>
      <h2>Back-End Proficiencies </h2>
      <ul>
        <li>Apis</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySql</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
}

export default Resume
