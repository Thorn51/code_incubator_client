import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="comment_vote">
        <ThumbUpIcon onClick={() => props.commentUpVote(props.id)}>
          thumb_up
        </ThumbUpIcon>
        <p className="votes">{props.votes}</p>
        <ThumbDownIcon onClick={() => props.commentDownVote(props.id)}>
          thumb_down
        </ThumbDownIcon>
      </div>
      <p className="user">{props.author}</p>
      <p className="comment_text">{props.content}</p>
    </div>
  );
}
