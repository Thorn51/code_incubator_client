import React from "react";
import "./RegistrationForm.css";
import ValidationError from "../ValidationError/ValidationError";
import AuthService from "../../services/auth-api-service";

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    //controlled form
    this.state = {
      first_name: {
        value: "",
        touched: false
      },
      last_name: {
        value: "",
        touched: false
      },
      nickname: {
        value: "",
        touched: false
      },
      email: {
        value: "",
        touched: false
      },
      password: {
        value: "",
        touched: false
      },
      repeat_password: {
        value: "",
        touched: false
      },
      error: null
    };
  }

  handleFirstNameChange(first_name) {
    this.setState({
      first_name: {
        value: first_name,
        touched: true
      }
    });
  }

  handleLastNameChange(last_name) {
    this.setState({
      last_name: {
        value: last_name,
        touched: true
      }
    });
  }

  handleNicknameChange(nickname) {
    this.setState({
      nickname: {
        value: nickname,
        touched: true
      }
    });
  }

  handleEmailChange(email) {
    this.setState({
      email: {
        value: email,
        touched: true
      }
    });
  }

  handlePasswordChange(password) {
    this.setState({
      password: {
        value: password,
        touched: true
      }
    });
  }

  handleRepeatPasswordChange(repeat_password) {
    this.setState({
      repeat_password: {
        value: repeat_password,
        touched: true
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      error: null
    });

    const newUser = {
      first_name: this.state.first_name.value,
      last_name: this.state.last_name.value,
      nickname: this.state.nickname.value,
      email: this.state.email.value,
      password: this.state.password.value
    };

    AuthService.postRegistration(newUser)
      .then(user => {
        this.props.handleRegistration(newUser);
        this.setState({
          //reset form
          first_name: {
            value: "",
            touched: false
          },
          last_name: {
            value: "",
            touched: false
          },
          nickname: {
            value: "",
            touched: false
          },
          email: {
            value: "",
            touched: false
          },
          password: {
            value: "",
            touched: false
          },
          repeat_password: {
            value: "",
            touched: false
          }
        });
        //Todo -> login user automatically after registration
        //Push user to login page
        this.props.history.push("/login");
      })
      .catch(res => {
        this.setState({
          error: res.error
        });
      });
  }

  validateFirstName() {
    const firstName = this.state.first_name.value.trim();
    if (firstName.length === 0) {
      return "First name is required.";
    }
  }

  validateLastName() {
    const lastName = this.state.last_name.value.trim();
    if (lastName.length === 0) {
      return "Last name is required.";
    }
  }

  validateNickname() {
    const nickname = this.state.nickname.value.trim();
    if (nickname.length === 0) {
      return "Nickname is required.";
    }
  }

  validateEmail() {
    const email = this.state.email.value.trim();
    if (email.length === 0) {
      return "Email is required.";
    } else if (
      //Regex Email Validation as per RFC2822 standards from regexr.com -> RFC2822 Email Verification
      !email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
      )
    ) {
      return "Please enter a valid e-mail address.";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required.";
      //Regex ensures that password is 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character from regexr.com -> Strong Password Validator
    } else if (
      !password.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g)
    ) {
      return "Password must be 8 to 64 characters long and contains a mix of upper and lower case characters, one numeric and one special character.";
    }
  }

  validateRepeatPassword() {
    const password = this.state.password.value.trim();
    const repeatPassword = this.state.repeat_password.value.trim();
    if (repeatPassword !== password) {
      return "Passwords do not match.";
    }
  }

  render() {
    const firstNameError = this.validateFirstName();
    const lastNameError = this.validateLastName();
    const nicknameError = this.validateNickname();
    const emailError = this.validateEmail();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <form className="registration_form" onSubmit={e => this.handleSubmit(e)}>
        <h2 className="section_title">Register</h2>
        <hr />
        <label htmlFor="registration_first_name">First Name:</label>
        <input
          type="text"
          name="first_name"
          id="registration_first_name"
          placeholder="Enter First Name"
          value={this.state.first_name.value}
          onChange={e => this.handleFirstNameChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.first_name.touched && (
          <ValidationError message={firstNameError} />
        )}
        <label htmlFor="registration_last_name">Last Name:</label>
        <input
          type="text"
          name="last_name"
          id="registration_last_name"
          placeholder="Enter Last Name"
          value={this.state.last_name.value}
          onChange={e => this.handleLastNameChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.last_name.touched && (
          <ValidationError message={lastNameError} />
        )}
        <label htmlFor="nickname">Nickname:</label>
        <input
          type="text"
          name="nickname"
          id="registration_nickname"
          placeholder="Enter Nickname"
          value={this.state.nickname.value}
          onChange={e => this.handleNicknameChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.nickname.touched && (
          <ValidationError message={nicknameError} />
        )}
        <label htmlFor="registration_email">Email:</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="registration_email"
          value={this.state.email.value}
          onChange={e => this.handleEmailChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.email.touched && <ValidationError message={emailError} />}
        <label htmlFor="registration_password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="registration_password"
          value={this.state.password.value}
          onChange={e => this.handlePasswordChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.password.touched && (
          <ValidationError message={passwordError} />
        )}
        <label htmlFor="registration_repeat_password">Repeat Password:</label>
        <input
          type="password"
          name="repeat_password"
          id="registration_repeat_password"
          placeholder="Repeat Password"
          value={this.state.repeat_password.value}
          onChange={e => this.handleRepeatPasswordChange(e.target.value)}
          required
        />
        {/* Render error message if input left blank */}
        {this.state.repeat_password.touched && (
          <ValidationError message={repeatPasswordError} />
        )}
        <button
          type="submit"
          className="form_button"
          disabled={
            this.validateFirstName() ||
            this.validateLastName() ||
            this.validateNickname() ||
            this.validateEmail() ||
            this.validatePassword() ||
            this.validateRepeatPassword()
          }
        >
          Register
        </button>
      </form>
    );
  }
}
