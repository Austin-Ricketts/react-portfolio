import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar} from 'react-bootstrap';
import "./style.css";

function Navigator() {
    return (
        <div>
        <Navbar collapseOnSelect  expand="lg">
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="mr-auto d-block">
                    <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/" className="navbar__link--active">
                        About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" as={Link} to="/Portfolio" className="navbar__link--active">
                        Portfolio
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    );
}

export default Navigator;