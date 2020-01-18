import React from "react";
import NavBar from "./Navigation/NavBar";
import Hero from "./Hero/Hero";
import CardList from "./CardList/CardList";

function App(props) {
  console.log(props.store.ideas);
  return (
    <main className="App">
      <NavBar login="Login" register="Register" />
      <Hero />
      <CardList ideas={props.store.ideas} />
    </main>
  );
}

export default App;
