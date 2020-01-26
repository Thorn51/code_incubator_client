import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CommentForm from "./CommentForm";

describe("<CommentForm />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CommentForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Renders the UI as expected", () => {
    const tree = renderer.create(<CommentForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
