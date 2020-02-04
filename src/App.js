import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NoPage from "./routes/NoPage/NoPage";
import IdeaPage from "./routes/IdeaPage/IdeaPage";
import SubmitIdeaPage from "./routes/SubmitIdeaPage/SubmitIdeaPage";
import config from "./config";

class App extends React.Component {
  state = {
    ideas: [],
    users: []
  };

  componentDidMount() {
    const fetchUsersUrl = config.API_ENDPOINT + "/api/users";
    const fetchIdeasUrl = config.API_ENDPOINT + "/api/ideas";
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };
    fetch(fetchUsersUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(error => {
        console.log(error);
      });
    fetch(fetchIdeasUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch ideas");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          ideas: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  projectUpVote = ideaId => {
    const idea = this.state.ideas.find(idea => idea.id === ideaId);
    const currentVote = parseInt(idea.votes);
    idea.votes = currentVote + 1;
    this.setState({
      idea
    });
  };

  projectDownVote = ideaId => {
    const idea = this.state.ideas.find(idea => idea.id === ideaId);
    const currentVote = parseInt(idea.votes);
    idea.votes = currentVote - 1;
    this.setState({
      idea
    });
  };

  handleNewIdea = newIdea => {
    const newId = this.state.ideas.length + 1;
    newIdea.id = newId.toString();
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
              return (
                <IdeaPage
                  {...history}
                  projectUpVote={this.projectUpVote}
                  projectDownVote={this.projectDownVote}
                />
              );
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
