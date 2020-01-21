import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default class Comment extends React.Component {
  static defaultProps = {
    comments: []
  };
  render() {
    const { comments, users } = this.props;
    const ideaComments = comments.map(comment => {
      const commentAuthor = users.find(author => author.id === comment.user_id);
      return (
        <div className="comment" key={comment.id}>
          <div className="comment_vote">
            <ThumbUpIcon>thumb_up</ThumbUpIcon>
            <p className="votes">{comment.votes}</p>
            <ThumbDownIcon>thumb_down</ThumbDownIcon>
          </div>
          <p className="user">{commentAuthor.nick_name}</p>
          <p className="comment_text">{comment.comment_text}</p>
        </div>
      );
    });
    return <div className="comments">{ideaComments}</div>;
  }
}
