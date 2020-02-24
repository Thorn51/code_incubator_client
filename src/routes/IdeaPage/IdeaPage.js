import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Idea from "../../components/Idea/Idea";
import Footer from "../../components/Footer/Footer";
import ApiService from "../../services/api-service";
import CommentList from "../../components/commentList/CommentList";

export default class IdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      ideaAuthor: []
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
        ApiService.getUser(this.state.idea.author).then(ideaAuthor => {
          this.setState({
            ideaAuthor
          });
        });
      });
  }

  projectUpVote = () => {
    const idea = { ...this.state.idea };
    idea.votes = parseInt(idea.votes) + 1;
    const votes = idea.votes;

    ApiService.patchProjectVote(votes, this.state.idea.id).then(() => {
      this.setState({
        idea
      });
    });
  };

  projectDownVote = () => {
    const idea = { ...this.state.idea };
    idea.votes = parseInt(idea.votes) - 1;
    const votes = idea.votes;

    ApiService.patchProjectVote(votes, idea.id).then(() => {
      this.setState({
        idea
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Idea
          idea={this.state.idea}
          author={this.state.ideaAuthor}
          projectUpVote={this.projectUpVote}
          projectDownVote={this.projectDownVote}
        />
        <section className="feedback">
          <h2 className="section_title">Feedback</h2>
          <CommentList project={this.props.match.params.id} />
        </section>
        <Footer />
      </div>
    );
  }
}
