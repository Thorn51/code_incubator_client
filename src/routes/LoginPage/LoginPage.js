import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/Navigation/NavBar";
import Hero from "../../components/Hero/Hero";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";

export default function LoginPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <LoginForm />
      <div className="form_redirect">
        <hr />
        <p>
          Do you need to create an account? Visit the{" "}
          <Link to="/register">registration page</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}
