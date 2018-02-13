import React from "react";
import "./NavBar.css";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render(props) {
        return (
            <nav className="navbar navbar-default">
                <a className="navbar-brand">
                    <span className="glyphicon glyphicon-menu-hamburger"></span>
                </a>
                <span className="location">{this.props.location}</span>

                <span className="navbar-brand navbar-right">
                    <Link to='/profile'>
                        <span className="glyphicon glyphicon-user"></span>
                    </Link>
                </span>

            </nav>
        );
    }

}

export default NavBar;