import React from "react";
import ReactDOM from "react-dom";
import IdeaLeaderboard from "./IdeaLeaderboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IdeaLeaderboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
