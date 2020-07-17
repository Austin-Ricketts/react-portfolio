import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <div>
            <nav className="navbar sticky-top navbar-light bg-light">
                <a className="navbar-brand" href="index.html">Austin Ricketts</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="index.html">About Me <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="portfolio.html">Portfolio</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;