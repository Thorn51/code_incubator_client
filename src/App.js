import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "./routes/NoteFoundPage/NoteFoundPage";

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
        <Switch>
          <Route exact path="/" component={HomePage} store={store} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
