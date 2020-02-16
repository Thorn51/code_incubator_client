import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";
import TokenServices from "../../services/token-service";

class HomePage extends React.Component {
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
        {TokenServices.hasAuthToken() ? this.renderSubmitIdeaButton() : null}
        <CardList ideas={ideas} users={users} />
        <Footer />
      </main>
    );
  }
}

export default HomePage;
