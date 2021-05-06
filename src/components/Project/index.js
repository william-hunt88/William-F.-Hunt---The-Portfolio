import React from "react";

function Project({currentProject}) {
    console.log(currentProject)
    return (
        <span> {currentProject.name} </span>
    )
}

export default Project