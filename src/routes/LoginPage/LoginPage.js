import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";

export default class LoginPage extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    //Route user to location they were accessing prior to logging in
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  render() {
    return (
      <div>
        <NavBar />
        <Hero />
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />

        <div className="form_redirect">
          {/* this section is included to meet Thinkful submission requirements */}
          <section className="demo_user">
            <h1 className="section_title">Demo User</h1>
            <p>
              Feel free to login as demoUser to take a spin around Code
              Incubator.
            </p>
            <p>
              <span className="bold">Email: </span>demo.user@demo.com
            </p>
            <p>
              <span className="bold">Password: </span>DemoUser1!
            </p>
          </section>
          <hr />
          <p>
            Do you need to create an account? Visit the{" "}
            <Link to="/register">registration page</Link>.
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
