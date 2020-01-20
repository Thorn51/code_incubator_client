import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default class Comment extends React.Component {
  static defaultProps = {
    comments: []
  };
  render() {
    const { comments } = this.props;
    const ideaComments = comments.map(comment => {
      <div className="comment" key={comment.id}>
        <div className="comment_vote">
          <ThumbUpIcon>thumb_up</ThumbUpIcon>
          <p className="votes">{comment.votes}</p>
          <ThumbDownIcon>thumb_down</ThumbDownIcon>
        </div>
        <p className="user">{comment.user_id}</p>
        <p className="comment_text">{comment.comment_text}</p>
      </div>;
    });
    return <section className="feedback">{ideaComments}</section>;
  }
}
