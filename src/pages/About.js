import React from "react";
import Austin from "./austin-photo.jpg";
import "./aboutStyle.css"

function About() {
    return (
    <main>
        <div className="container">
            <div className="row" id="header">
                <div className="col-lg-5"></div>
                <div className="col-lg-4">
                    <h1>A Modernist with a Soul</h1>
                </div>
                <div className="col-lg-2"></div>
            </div>
            <div className="row"></div>
            <br></br>
            <div className="row" >
                <div className="col-lg-4">
                    <img src={Austin} alt="austin" className="img-thumbnail"></img>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4" id="brand">
                <p>
                    `I’m a front-end web developer, with skills on the back-end. 
                    I utilize information theory, visual art skills, and my pedagogical 
                    background to structure intuitive user experiences. I recently earned 
                    a certificate in full-stack development from the University of Pennsylvania, 
                    focusing on JavaScript, CSS, Node.js, and Object-Oriented programming. I develop 
                    responsive, mobile-first designs where form and function mingle toward marriage. 
                    Modernism with a soul is my motto. I’m motivated by highly-skilled teams, and 
                    pair programming, that harmonizes technical and aesthetic skills. And I recently 
                    worked on successful teams, within an agile framework, to create two well-received MVPs. 
                    I’m excited to continue learning, designing, and deploying with a quality-first team.`
                    </p>
                </div>
            </div>
            <div className="row" ></div>
        </div>
    </main>
    );
}

export default About;