import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NoPage from "./routes/NoPage/NoPage";
import IdeaPage from "./routes/IdeaPage/IdeaPage";
import SubmitIdeaPage from "./routes/SubmitIdeaPage/SubmitIdeaPage";
import STORE from "./STORE";

class App extends React.Component {
  state = {
    ideas: STORE.ideas,
    comments: STORE.comments,
    users: STORE.users
  };

  commentUpVote = commentId => {
    const comment = this.state.comments.find(
      comment => comment.id === commentId
    );
    const currentVote = parseInt(comment.votes);
    comment.votes = currentVote + 1;
    this.setState({
      comment
    });
  };

  commentDownVote = commentId => {
    const comment = this.state.comments.find(
      comment => comment.id === commentId
    );
    const currentVote = parseInt(comment.votes);
    comment.votes = currentVote - 1;
    this.setState({
      comment
    });
  };

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

  handleComment = newComment => {
    newComment.id = this.state.comments.length + 1;
    this.setState({
      comments: [...this.state.comments, newComment]
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
    const { ideas, comments, users } = this.state;
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
                  ideas={ideas}
                  comments={comments}
                  users={users}
                  commentUpVote={this.commentUpVote}
                  commentDownVote={this.commentDownVote}
                  projectUpVote={this.projectUpVote}
                  projectDownVote={this.projectDownVote}
                  handleComment={this.handleComment}
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
