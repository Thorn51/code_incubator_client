import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NoPage from "./routes/NoPage/NoPage";
import IdeaPage from "./routes/IdeaPage/IdeaPage";
import SubmitIdeaPage from "./routes/SubmitIdeaPage/SubmitIdeaPage";
import ApiService from "./services/api-service";

class App extends React.Component {
  state = {
    ideas: [],
    users: []
  };

  componentDidMount() {
    ApiService.getAllUsers().then(users => {
      this.setState({
        users
      });
    });
    ApiService.getAllIdeas().then(ideas => {
      this.setState({
        ideas
      });
    });
  }

  handleNewIdea = newIdea => {
    this.setState({
      ideas: [...this.state.ideas, newIdea]
    });
  };

  handleRegistration = newUser => {
    const userId = this.state.users.length + 1;
    newUser.id = userId;
    this.setState({
      users: [...this.state.users, newUser]
    });
  };

  render() {
    const { ideas, users } = this.state;
    return (
      <main className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => <HomePage ideas={ideas} users={users} />}
          />
          <Route
            path="/idea/:ideaId"
            render={history => {
              return <IdeaPage {...history} />;
            }}
          />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/register"
            render={props => (
              <RegistrationPage
                {...props}
                handleRegistration={this.handleRegistration}
              />
            )}
          />
          <Route
            path="/submitidea"
            render={props => (
              <SubmitIdeaPage {...props} handleNewIdea={this.handleNewIdea} />
            )}
          />
          <Route component={NoPage} />
        </Switch>
      </main>
    );
  }
}

export default App;
