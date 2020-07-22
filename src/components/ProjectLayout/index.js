import React from "react";
import "./style.css";


function Projects(props) {
    return (
        <div className="col-4">
            <p className="titles">{props.title}</p>
            <a href={props.siteLink}>
            <img src={props.image} alt={props.title}  className="img-thumbnail"></img>
            </a>
            <a href={props.repoLink} className="titles">Repo Link</a>
        </div>
    )
}

export default Projects;

