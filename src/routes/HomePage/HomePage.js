import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import TokenServices from "../../services/token-service";

class HomePage extends React.Component {
  //The submit idea button is oly rendered when a user is logged in
  renderSubmitIdeaButton() {
    return (
      <Link to="/submitidea">
        <button type="button" className="idea_button">
          Submit Idea
        </button>
      </Link>
    );
  }
  render() {
    const { ideas, users } = this.props;
    return (
      <main className="App">
        <Hero />
        <div className="idea_button_container">
          {/* Check to see if an auth token has been issued, if so, render button */}
          {TokenServices.hasAuthToken() ? this.renderSubmitIdeaButton() : null}
        </div>
        <CardList ideas={ideas} users={users} />
        <Footer />
      </main>
    );
  }
}

export default HomePage;
