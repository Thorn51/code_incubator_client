import React from "react";
import "./Hero.css";
import NavBar from "../Navigation/NavBar";

export default function Hero() {
  return (
    <header className="hero">
      <NavBar />
      <h1 className="app_name">Code Incubator</h1>
      <h3 className="hero_tag">
        Grow your web development ideas into full-stack projects
      </h3>
    </header>
  );
}
