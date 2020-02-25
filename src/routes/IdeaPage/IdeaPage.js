import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Footer from "../../components/Footer/Footer";
import ApiService from "../../services/api-service";
import CommentList from "../../components/CommentList/CommentList";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";
import TokenServices from "../../services/token-service";

export default class IdeaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: [],
      ideaAuthor: [],
      ideaVotes: []
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
      })
      .then(() => {
        ApiService.getAllIdeaVotes().then(data => {
          let ideaVotes = data.filter(vote => vote.idea === this.state.idea.id);
          this.setState({
            ideaVotes
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

    ApiService.postIdeaVote(1, idea.id).then(() => {
      ApiService.getAllIdeaVotes().then(() => {
        ApiService.getAllIdeaVotes().then(data => {
          let ideaVotes = data.filter(vote => vote.idea === this.state.idea.id);
          this.setState({
            ideaVotes
          });
        });
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

    ApiService.postIdeaVote(-1, idea.id).then(() => {
      ApiService.getAllIdeaVotes().then(() => {
        ApiService.getAllIdeaVotes().then(data => {
          let ideaVotes = data.filter(vote => vote.idea === this.state.idea.id);
          this.setState({
            ideaVotes
          });
        });
      });
    });
  };

  renderVoteOptions() {
    const token = TokenServices.getAuthToken();
    const { user_id } = TokenServices.getUserDetails(token);

    let usersInVotes = [];

    this.state.ideaVotes.forEach(vote => usersInVotes.push(vote.vote_by_user));

    const userPlacedVote = usersInVotes.includes(user_id);

    let loggedInUserVote;

    if (userPlacedVote === true) {
      loggedInUserVote = this.state.ideaVotes.find(
        vote => vote.vote_by_user === user_id
      );
    }

    if (userPlacedVote === false) {
      return (
        <div className="project_vote">
          <ThumbUpIcon onClick={this.projectUpVote}>thumb_up</ThumbUpIcon>
          <p className="votes_for">{this.state.idea.votes}</p>
          <ThumbDownIcon onClick={this.projectDownVote}></ThumbDownIcon>
        </div>
      );
    } else if (userPlacedVote === true && loggedInUserVote.vote === "1") {
      return (
        <div className="project_vote">
          <ThumbUpIcon className="green"></ThumbUpIcon>
          <p className="votes_for">
            {this.state.idea.votes} People say go for it!
          </p>
          <ThumbDownIcon className="disabled"></ThumbDownIcon>
        </div>
      );
    } else if (userPlacedVote === true && loggedInUserVote.vote === "-1") {
      return (
        <div className="project_vote">
          <ThumbUpIcon className="disabled"></ThumbUpIcon>
          <p className="votes_for">
            {this.state.idea.votes} People say go for it!
          </p>
          <ThumbDownIcon className="red"></ThumbDownIcon>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <header className="idea_page_header">
          <h1 className="app_name">{this.state.idea.project_title}</h1>
          {this.renderVoteOptions()}
        </header>
        <section className="project_details">
          <p>
            <span className="bold"> Submitted by:</span>{" "}
            <span>{this.state.ideaAuthor.nickname}</span>
          </p>
          <p>
            <span className="bold">Submit Date:</span>{" "}
            <span>
              {moment(this.state.idea.date_submitted).format("MMM Do YYYY")}
            </span>
          </p>
          <p>
            <span className="bold">Status:</span>{" "}
            <span>{this.state.idea.status}</span>
          </p>
          {this.state.idea.github === "" ? null : (
            <p>
              <span className="bold">Repo:</span>{" "}
              <span>{this.state.idea.github}</span>
            </p>
          )}
        </section>
        <section className="idea_description">
          <h2 className="section_title">Overview</h2>
          <p>{this.state.idea.project_summary}</p>
        </section>
        <CommentList project={this.props.match.params.id} />
        <Footer />
      </div>
    );
  }
}
