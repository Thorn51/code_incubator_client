import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Comment from "./Comment";

describe("<Comment />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Comment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer.create(<Comment />).toJSON();
    expect("tree").toMatchSnapshot();
  });
});
