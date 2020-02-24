import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";
import ApiService from "../../services/api-service";

export default class Comment extends React.Component {
  state = {
    comment: [],
    userVote: false,
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
    console.log(this.state.comment.id, "Up Vote");
  };

  downVote = () => {
    console.log(this.state.comment.id, "Down Vote");
  };

  render() {
    return (
      <div className="comment">
        <div className="comment_vote">
          <ThumbUpIcon onClick={this.upVote}>thumb_up</ThumbUpIcon>
          <p className="votes">{this.state.comment.votes}</p>
          <ThumbDownIcon onClick={this.downVote}>thumb_down</ThumbDownIcon>
        </div>
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
