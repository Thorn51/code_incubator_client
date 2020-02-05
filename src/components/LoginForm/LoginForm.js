import React from "react";
import TokenServices from "../../services/token-service";
import "./LoginForm.css";

export default class LoginForm extends React.Component {
  handleLoginBasicAuth = e => {
    e.preventDefault();
    const { email, password } = e.target;

    console.log(email.value, password.value);

    TokenServices.saveAuthToken(
      TokenServices.makeBasicAuthToken(email.value, password.value)
    );

    email.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };
  render() {
    return (
      <form className="registration_form" onSubmit={this.handleLoginBasicAuth}>
        <h2 className="section_title">Login</h2>
        <hr />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="password"
          required
        />
        <button type="submit" className="form_button">
          Login
        </button>
      </form>
    );
  }
}
