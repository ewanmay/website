import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              activeStyle={{ fontWeight: "bold", color: "white" }}
            >
              <li className="nav-item">
                <div className="nav-link nav-link-second" href="#">
                  Home
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/timeline"
              activeStyle={{ fontWeight: "bold", color: "white" }}
            >
              <li className="nav-item">
                <div className="nav-link nav-link-second" href="#">
                  Timeline
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={{ fontWeight: "bold", color: "white" }}
            >
              <li className="nav-item">
                <div className="nav-link nav-link-second" href="#">
                  Contact
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
