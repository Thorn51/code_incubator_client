import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import TokenServices from "../../services/token-service";

class NavBar extends React.Component {
  handleLogoutClick = () => {};

  renderLogoutNav() {
    return (
      <nav className="navigationBar">
        <ul className="nav_logo">
          <li className="nav_li">
            <Link to="/">Code Incubator</Link>
          </li>
        </ul>
        <ul className="navigation_list">
          <li className="nav_li">
            <Link onClick={this.handleLogoutClick} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  renderLoginNav() {
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
  render() {
    return (
      <>
        {TokenServices.hasAuthToken()
          ? this.renderLogoutNav()
          : this.renderLoginNav()}
      </>
    );
  }
}

export default NavBar;
