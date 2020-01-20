import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navigationBar">
        <ul className="navigation_list">
          <li className="nav_li">
            <a href="#registration">{this.props.register}</a>
          </li>
          <li className="nav_li">
            <a href="#login">{this.props.login}</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
