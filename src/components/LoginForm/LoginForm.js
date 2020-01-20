import React from "react";
import "./LoginForm.css";

export default class LoginForm extends React.Component {
  render() {
    return (
      <form className="registration_form">
        <h2 className="section_title">Login</h2>
        <hr />
        <label htmlFor="login_email">Email:</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="login_email"
          required
        />
        <label htmlFor="login_password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="login_password"
          required
        />
        <button type="submit" className="form_button">
          Login
        </button>
      </form>
    );
  }
}
