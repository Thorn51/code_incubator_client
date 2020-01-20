import React from "react";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";

export default function() {
  return (
    <div>
      <NavBar />
      <Hero />
      <LoginForm />
      <div className="form_redirect">
        <hr />
        <p>
          Do you need to create an account? Visit the
          <a href="#registration">registration page</a>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
