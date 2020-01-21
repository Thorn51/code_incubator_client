import React from "react";
import "./SubmitIdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import IdeaForm from "../../components/IdeaForm/IdeaForm";
import Footer from "../../components/Footer/Footer";

export default function SubmitIdeaPage() {
  return (
    <div className="submit_idea">
      <NavBar />
      <Hero />
      <IdeaForm />
      <Footer />
    </div>
  );
}
