import React from "react";
import ReactDOM from "react-dom";
import ReigstrationForm from "./RegistrationForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReigstrationForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
