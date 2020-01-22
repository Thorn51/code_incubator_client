import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default class Comment extends React.Component {
  static defaultProps = {
    comments: []
  };

  constructor(props) {
    super(props);
    this.state = {
      votes: parseInt(props.votes)
    };
  }

  handleThumbsUp = () => {
    const votes = this.state.votes + 1;
    this.setState({
      votes
    });
  };

  handleThumbsDown = () => {
    const votes = this.state.votes - 1;
    this.setState({
      votes
    });
  };

  commentAuthor = author => {};

  render() {
    return (
      <div className="comment">
        <div className="comment_vote">
          <ThumbUpIcon onClick={this.handleThumbsUp}>thumb_up</ThumbUpIcon>
          <p className="votes">{this.state.votes}</p>
          <ThumbDownIcon onClick={this.handleThumbsDown}>
            thumb_down
          </ThumbDownIcon>
        </div>
        <p className="user">{this.props.author}</p>
        <p className="comment_text">{this.props.content}</p>
      </div>
    );
  }
}
