import React from "react";
import TokenServices from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import "./LoginForm.css";

export default class LoginForm extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { email, password } = e.target;

    AuthApiService.postLogin({ email: email.value, password: password.value })
      .then(response => {
        email.value = "";
        password.value = "";
        TokenServices.saveAuthToken(response.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({
          error: "The login information provided is incorrect."
        });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form className="registration_form" onSubmit={this.handleSubmitJwtAuth}>
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
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <button type="submit" className="form_button">
          Login
        </button>
      </form>
    );
  }
}
