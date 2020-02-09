import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Idea from "../../components/Idea/Idea";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import ApiService from "../../services/api-service";
import config from "../../config";
import TokenServices from "../../services/token-service";

export default class IdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      user: [],
      comments: []
    };
  }

  static defaultProps = {
    match: { params: {} }
  };

  componentDidMount() {
    ApiService.getIdea(this.props.match.params.id)
      .then(idea => {
        this.setState({
          idea
        });
      })
      .then(() => {
        ApiService.getUser(this.state.idea.author).then(user => {
          this.setState({
            user
          });
        });
      });
    ApiService.getAllComments().then(comments => {
      this.setState({
        comments
      });
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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

    const options = {
      method: "PATCH",
      body: JSON.stringify({ votes }),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
          votes
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
        Authorization: `Bearer ${TokenServices.getAuthToken()}`
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
