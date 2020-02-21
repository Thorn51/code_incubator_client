import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import TokenServices from "../../services/token-service";
import ApiService from "../../services/api-service";

class HomePage extends React.Component {
  //The submit idea button is oly rendered when a user is logged in
  state = {
    ideas: [],
    users: []
  };

  componentDidMount() {
    ApiService.getAllUsers().then(users => {
      this.setState({
        users
      });
    });
    ApiService.getAllIdeas().then(ideas => {
      this.setState({
        ideas
      });
    });
  }

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
    const { ideas, users } = this.state;
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
