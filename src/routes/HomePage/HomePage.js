import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import CardList from "../../components/CardList/CardList";
import Footer from "../../components/Footer/Footer";

class HomePage extends React.Component {
  render() {
    const { ideas } = this.props;
    return (
      <main className="App">
        <NavBar login="Login" register="Register" />
        <Hero />
        <CardList ideas={ideas} />
        <Footer />
      </main>
    );
  }
}

export default HomePage;
