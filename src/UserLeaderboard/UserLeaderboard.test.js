import React from "react";
import ReactDOM from "react-dom";
import UserLeaderboard from "./UserLeaderboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserLeaderboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
