import React from "react";
import "./RegistrationForm.css";

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="registration_form">
        <h2 className="section_title">Register</h2>
        <hr />
        <label htmlFor="registration_first_name">First Name:</label>
        <input
          type="text"
          name="first_name"
          id="registration_first_name"
          placeholder="Enter First Name"
          required
        />
        <label htmlFor="registration_last_name">Last Name:</label>
        <input
          type="text"
          name="last_name"
          id="registration_last_name"
          placeholder="Enter Last Name"
          required
        />
        <label htmlFor="registration_email">Email:</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="registration_email"
          required
        />
        <label htmlFor="registration_password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="registration_password"
          required
        />
        <label htmlFor="registration_repeat_password">Repeat Password:</label>
        <input
          type="password"
          name="repeat_password"
          id="registration_repeat_password"
          placeholder="Repeat Password"
          required
        />
        <button type="submit" className="form_button">
          Register
        </button>
      </form>
    );
  }
}
