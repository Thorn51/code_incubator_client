import React from "react";
import NavBar from "./Navigation/NavBar";
import Hero from "./Hero/Hero";

function App() {
  return (
    <main className="App">
      <NavBar login="Login" register="Register" />
      <Hero />
    </main>
  );
}

export default App;
