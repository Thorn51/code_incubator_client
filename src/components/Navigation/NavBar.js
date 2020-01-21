import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navigationBar">
        <ul className="nav_logo">
          <li className="nav_li">
            <Link to="/">Code Incubator</Link>
          </li>
        </ul>
        <ul className="navigation_list">
          <li className="nav_li">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav_li">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
