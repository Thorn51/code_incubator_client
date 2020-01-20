import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import CardList from "./CardList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the UI as expected", () => {
  const tree = renderer.create(<CardList />).toJSON();
  expect(tree).toMatchSnapshot();
});
