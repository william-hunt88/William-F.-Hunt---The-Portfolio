import React, { useState } from "react";

function Project({currentProject, setCurrentProject}) {
    console.log(currentProject)
    return (
        <span> {currentProject.name} </span>
        
    )
}

export default Project