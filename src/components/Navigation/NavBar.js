import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import TokenServices from "../../services/token-service";

class NavBar extends React.Component {
  handleLogoutClick = () => {
    TokenServices.clearAuthToken();
  };

  //navigation if user is logged in
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
          <li className="nav_li">
            <Link to="/submitidea">Submit Idea</Link>
          </li>
        </ul>
      </nav>
    );
  }

  //Navigation if user is not logged in
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
        {/* Render navigation based on if the user is logged in or not */}
        {TokenServices.hasAuthToken()
          ? this.renderLogoutNav()
          : this.renderLoginNav()}
      </>
    );
  }
}

export default NavBar;
