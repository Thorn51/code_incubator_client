import React from "react";
import ReactDOM from "react-dom";
import Idea from "./Idea";

describe("<Idea />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Idea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
