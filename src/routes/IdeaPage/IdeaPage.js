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

  render() {
    const ideaComments = this.state.comments.filter(
      comment => comment.project === this.state.idea.id
    );

    const comment = ideaComments.map(comment => (
      <Comment
        key={comment.id}
        {...comment}
        author={this.state.user.nickname}
      />
    ));
    return (
      <div>
        <NavBar />
        <Idea
          idea={this.state.idea}
          author={this.state.user}
          projectUpVote={this.props.projectUpVote}
          projectDownVote={this.props.projectDownVote}
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
