import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";
import ApiService from "../../services/api-service";
import TokenServices from "../../services/token-service";

export default class Comment extends React.Component {
  state = {
    comment: [],
    commentVotes: [],
    ready: false
  };

  componentDidMount() {
    ApiService.getComment(this.props.id)
      .then(comment => {
        this.setState({
          comment
        });
      })
      .then(() => {
        ApiService.getAllCommentVotes().then(votes => {
          const commentVotes = votes.filter(
            vote => vote.comment === this.state.comment.id
          );
          this.setState({
            commentVotes
          });
        });
      })
      .then(() => {
        ApiService.getUser(this.state.comment.author)
          .then(author => {
            this.setState({
              author
            });
          })
          .then(() => {
            this.setState({
              ready: true
            });
          });
      });
  }

  upVote = () => {
    let comment = this.state.comment;
    comment.votes = parseInt(comment.votes) + 1;
    ApiService.patchCommentVote(comment.votes, comment.id).then(() => {
      this.setState({
        comment
      });
    });
    ApiService.postCommentVote(1, comment.id).then(data => {
      this.setState({
        commentVotes: [...this.state.commentVotes, data]
      });
    });
  };

  downVote = () => {
    let comment = this.state.comment;
    comment.votes = parseInt(comment.votes) - 1;
    ApiService.patchCommentVote(comment.votes, comment.id).then(() => {
      this.setState({
        comment
      });
    });
    ApiService.postCommentVote(-1, comment.id).then(data => {
      this.setState({
        commentVotes: [...this.state.commentVotes, data]
      });
    });
  };

  renderVoteOptions() {
    const token = TokenServices.getAuthToken();
    const { user_id } = TokenServices.getUserDetails(token);

    let usersInVotes = [];

    this.state.commentVotes.forEach(vote =>
      usersInVotes.push(vote.vote_by_user)
    );

    const userPlacedVote = usersInVotes.includes(user_id);

    let loggedInUserVote;

    if (userPlacedVote === true) {
      loggedInUserVote = this.state.commentVotes.find(
        vote => vote.vote_by_user === user_id
      );
    }

    if (userPlacedVote === false) {
      return (
        <div className="comment_vote">
          <ThumbUpIcon onClick={this.upVote}>thumb_up</ThumbUpIcon>
          <p className="votes">{this.state.comment.votes}</p>
          <ThumbDownIcon onClick={this.downVote}>thumb_down</ThumbDownIcon>
        </div>
      );
    } else if (userPlacedVote === true && loggedInUserVote.vote === "1") {
      return (
        <div className="comment_vote">
          <ThumbUpIcon className="green"></ThumbUpIcon>
          <p className="votes">{this.state.comment.votes} Thumbs Up!</p>
          <ThumbDownIcon className="disabled"></ThumbDownIcon>
        </div>
      );
    } else if (userPlacedVote === true && loggedInUserVote.vote === "-1") {
      return (
        <div className="comment_vote">
          <ThumbUpIcon className="disabled"></ThumbUpIcon>
          <p className="votes">{this.state.comment.votes} Thumbs Up!</p>
          <ThumbDownIcon className="red"></ThumbDownIcon>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="comment">
        {this.state.ready && this.renderVoteOptions()}
        <div className="comment_header">
          <p className="user">
            {this.state.ready && this.state.author.nickname}
          </p>
          <p className="submit_date">
            {moment(this.props.date_submitted).format("MMM Do YYYY")}
          </p>
        </div>
        <p className="comment_text">
          {this.state.ready && this.state.comment.comment_text}
        </p>
      </div>
    );
  }
}

Comment.defaultProps = {
  commentAuthor: []
};
