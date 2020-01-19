import React from "react";
import NavBar from "./Navigation/NavBar";
import Hero from "./Hero/Hero";
import CardList from "./CardList/CardList";

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
      </main>
    );
  }
}

export default App;
