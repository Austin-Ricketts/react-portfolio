import React from "react";
import Song from "./song.png";
import Giph from "./giph.png";
import Quiz from "./coding-quiz.png";
import Weather from "./weather.png";
import Work from "./workday.png";
import Read from "./readme.png";
import site from "../components/sites.json";
import Projects from "../components/ProjectLayout";
import "./portfolioStyle.css";


function Portfolio() {
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h1 id="header">Projects</h1>
                    </div>
                    <div className="col-4"></div>
                </div>
                <div className="row">
                    <Projects
                        title={site[0].title}
                        siteLink={site[0].siteLink}
                        image={Song}
                        repoLink={site[0].repoLink}
                    />
                    <div className="col-4"></div>
                    <Projects
                        title={site[1].title}
                        siteLink={site[1].siteLink}
                        image={Giph}
                        repoLink={site[1].repoLink}
                    />
                </div>
                <br></br>
                <div className="row">
                    <Projects
                        title={site[2].title}
                        siteLink={site[2].siteLink}
                        image={Quiz}
                        repoLink={site[2].repoLink}
                    />
                    <div className="col-4"></div>
                    <Projects
                        title={site[3].title}
                        siteLink={site[3].siteLink}
                        image={Weather}
                        repoLink={site[3].repoLink}
                    />
                </div>
                <br></br>
                <div className="row">
                    <Projects
                        title={site[4].title}
                        siteLink={site[4].siteLink}
                        image={Work}
                        repoLink={site[4].repoLink}
                    />
                    <div className="col-4"></div>
                    <Projects
                        title={site[5].title}
                        siteLink={site[5].siteLink}
                        image={Read}
                        repoLink={site[5].repoLink}
                    />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;