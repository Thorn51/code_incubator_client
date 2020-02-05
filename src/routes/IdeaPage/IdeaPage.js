import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Idea from "../../components/Idea/Idea";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import config from "../../config";

export default class IdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      user: [],
      comments: []
    };
  }

  componentDidMount() {
    const ideaUrl =
      config.API_ENDPOINT + `/api/ideas/${this.props.match.params.ideaId}`;

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(ideaUrl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch idea -> ${ideaUrl}`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          idea: data
        });
      })
      .then(() => {
        fetch(
          config.API_ENDPOINT + `/api/users/${this.state.idea.author}`,
          options
        )
          .then(response => {
            if (!response.ok) {
              throw new Error(
                `There has been a network failure trying to fetch users`
              );
            } else {
              return response.json();
            }
          })
          .then(user => {
            this.setState({
              user: user
            });
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });

    fetch(config.API_ENDPOINT + `/api/comments`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("An error is preventing fetching comments");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          comments: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleComment = newComment => {
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  commentUpVote = commentId => {
    const comment = this.state.comments.find(
      comment => comment.id === commentId
    );
    const currentVote = parseInt(comment.votes);
    comment.votes = currentVote + 1;
    const votes = comment.votes;

    const options = {
      method: "PATCH",
      body: JSON.stringify({ votes: votes }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(config.API_ENDPOINT + `/api/comments/${commentId}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            "There has been a error while editing the comment vote"
          );
        } else {
          return response.json();
        }
      })
      .then(() => {
        this.setState({
          comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  commentDownVote = commentId => {
    const comment = this.state.comments.find(
      comment => comment.id === commentId
    );
    const currentVote = parseInt(comment.votes);
    comment.votes = currentVote - 1;
    const votes = comment.votes;
    console.log(votes);
    const options = {
      method: "PATCH",
      body: JSON.stringify({ votes: votes }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(config.API_ENDPOINT + `/api/comments/${commentId}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            "There has been a error while editing the comment vote"
          );
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  projectUpVote = () => {
    const idea = { ...this.state.idea };
    idea.votes = parseInt(idea.votes) + 1;
    const votes = idea.votes;
    const options = {
      method: "PATCH",
      body: JSON.stringify({ votes: votes }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(config.API_ENDPOINT + `/api/ideas/${this.state.idea.id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There was a problem editing idea");
        } else {
          return response.json();
        }
      })
      .then(() => {
        this.setState({
          idea
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  projectDownVote = () => {
    const idea = { ...this.state.idea };
    idea.votes = parseInt(idea.votes) - 1;
    const votes = idea.votes;
    const options = {
      method: "PATCH",
      body: JSON.stringify({ votes: votes }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(config.API_ENDPOINT + `/api/ideas/${this.state.idea.id}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There was a problem editing idea");
        } else {
          return response.json();
        }
      })
      .then(() => {
        this.setState({
          idea
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const ideaComments = this.state.comments.filter(
      comment => comment.project === this.state.idea.id
    );

    const comment = ideaComments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
        commentUpVote={this.commentUpVote}
        commentDownVote={this.commentDownVote}
        author={this.state.user.nickname}
      />
    ));
    return (
      <div>
        <NavBar />
        <Idea
          idea={this.state.idea}
          author={this.state.user}
          projectUpVote={this.projectUpVote}
          projectDownVote={this.projectDownVote}
        />
        <section className="feedback">
          <h2 className="section_title">Feedback</h2>
          {comment}
          <CommentForm
            project={this.state.idea.id}
            handleComment={this.handleComment}
          />
        </section>
        <Footer />
      </div>
    );
  }
}
