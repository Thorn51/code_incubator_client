import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

export default function() {
  return (
    <div>
      <NavBar />
      <Hero />
      <h1>Sorry but we cannot find that resource!</h1>
      <Footer />
    </div>
  );
}
