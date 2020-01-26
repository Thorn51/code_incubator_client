import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Idea from "./Idea";

describe("<Idea />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Idea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders Idea as expected", () => {
    const tree = renderer.create(<Idea />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
