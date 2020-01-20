import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Footer from "../../components/Footer/Footer";

export default function RegistrationPage() {
  return (
    <div className="page_container">
      <NavBar />
      <Hero />
      <RegistrationForm />
      <div className="form_redirect">
        <hr />
        <p>
          Do you already have an account? Visit the{" "}
          <Link to="/login">login page</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
