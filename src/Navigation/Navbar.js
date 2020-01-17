import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="navigationBar">
      <ul className="navigation_list">
        <li className="nav_li">
          <a href="#registration">{props.register}</a>
        </li>
        <li className="nav_li">
          <a href="#login">{props.login}</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
