import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Comment(props) {
  console.log(props);
  const commentAuthor = props.users.find(
    user => user.id === props.comment.user_id
  );
  return (
    <div className="comment">
      <div className="comment_vote">
        <ThumbUpIcon onClick={() => props.commentUpVote(props.comment.id)}>
          thumb_up
        </ThumbUpIcon>
        <p className="votes">{props.comment.votes}</p>
        <ThumbDownIcon onClick={() => props.commentDownVote(props.comment.id)}>
          thumb_down
        </ThumbDownIcon>
      </div>
      <div className="comment_header">
        <p className="user">{commentAuthor.nickname}</p>
        <p className="submit_date">{props.comment.date_submitted}</p>
      </div>
      <p className="comment_text">{props.comment.comment_text}</p>
    </div>
  );
}
