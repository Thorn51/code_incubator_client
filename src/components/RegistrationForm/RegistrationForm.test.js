import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import RegistrationForm from "./RegistrationForm";

describe("<RegistrationForm />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders as expected", () => {
    const tree = renderer.create(<RegistrationForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
