import React from "react";
import "./Comment.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";

export default function Comment(props) {
  console.log(props);
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
      <div className="comment_header">
        <p className="user">{props.commentAuthor.nickname}</p>
        <p className="submit_date">
          {moment(props.date_submitted).format("MMM Do YYYY")}
        </p>
      </div>
      <p className="comment_text">{props.comment_text}</p>
    </div>
  );
}

Comment.defaultProps = {
  commentAuthor: []
};
