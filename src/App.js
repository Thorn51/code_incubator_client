import React from "react";
import NavBar from "./components/Navigation/NavBar";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  static defaultProps = {
    store: {
      ideas: [],
      comments: []
    }
  };

  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <NavBar login="Login" register="Register" />
        <Hero />
        <CardList ideas={store.ideas} />
        <Footer />
      </main>
    );
  }
}

export default App;
