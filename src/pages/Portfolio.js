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
                
                
                {/* <div className="row">
                    <div className="col-4">
                        <p class="titles">A Song in the Life</p>
                        <a href="https://g0nzy.github.io/song-in-the-life/">
                        <img src={Song} alt="Song in the Life"  class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/G0nZy/song-in-the-life" className="titles">Repo Link</a>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p class="titles">Giph Your Times</p>
                        <a href="https://ancient-depths-99799.herokuapp.com/?fbclid=IwAR3-aJRU1lUiURs_wBZ_gUJjfySUxFH8lkNONJkGM1R7Czi3X1KEhuwdXvs">
                        <img src={Giph} alt="Giph Your Times" class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/Austin-Ricketts/giph-you-times" className="titles">Repo Link</a>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <p class="titles">Coding Quiz</p>
                        <a href="https://austin-ricketts.github.io/Coding-Quiz/">
                        <img src={Quiz} alt="Coding Quiz" class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/Austin-Ricketts/Coding-Quiz" className="titles">Repo Link</a>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p class="titles">Austin's Meteorology</p>
                        <a href="https://austin-ricketts.github.io/weather-app/">
                        <img src={Weather} alt="Austin's Meteorology" class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/Austin-Ricketts/weather-app" className="titles">Repo Link</a>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-4">
                        <p class="titles">Work Day Scheduler</p>
                        <a href="https://austin-ricketts.github.io/Work-Day-Scheduler/">
                        <img src={Work} alt="Work Day Scheduler" class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/Austin-Ricketts/Work-Day-Scheduler" className="titles">Repo Link</a>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p class="titles">README Generator</p>
                        <a href="https://drive.google.com/file/d/1jGfjDUIr5avwcM6xryBwY20fVAwPlecH/view">
                        <img src={Read} alt="README Generator" class="img-thumbnail"></img>
                        </a>
                        <a href="https://github.com/Austin-Ricketts/readme-generator" className="titles">Repo Link</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Portfolio;