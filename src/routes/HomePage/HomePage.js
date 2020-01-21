import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const { ideas, users } = this.props;
    return (
      <main className="App">
        <NavBar />
        <Hero />
        <Link to="/submitidea">
          <button type="button" className="idea_button">
            Submit Idea
          </button>
        </Link>
        <CardList ideas={ideas} users={users} />
        <Footer />
      </main>
    );
  }
}

export default HomePage;
