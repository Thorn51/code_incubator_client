import React from "react";
import ReactDOM from "react-dom";
import IdeaForm from "./IdeaForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IdeaForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
