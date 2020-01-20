import React from "react";
import HomePage from "./routes/HomePage/HomePage";

class App extends React.Component {
  static defaultProps = {
    store: {
      ideas: [],
      comments: [],
      users: []
    }
  };
  render() {
    const { store } = this.props;
    return (
      <main className="App">
        <HomePage ideas={store.ideas} />
      </main>
    );
  }
}

export default App;
