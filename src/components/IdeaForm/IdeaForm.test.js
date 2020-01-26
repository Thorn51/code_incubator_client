import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import IdeaForm from "./IdeaForm";

describe("<IdeaForm />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<IdeaForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders IdeaForm as expected", () => {
    const tree = renderer.create(<IdeaForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
