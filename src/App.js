import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NotFoundPage from "./routes/NoteFoundPage/NoteFoundPage";
import IdeaPage from "./routes/IdeaPage/IdeaPage";
import SubmitIdeaPage from "./routes/SubmitIdeaPage/SubmitIdeaPage";

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
          <Route exact path="/" render={props => <HomePage {...store} />} />
          <Route path="/idea/:ideaId" component={IdeaPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegistrationPage} />
          <Route path="/submitidea" component={SubmitIdeaPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
