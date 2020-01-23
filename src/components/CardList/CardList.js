import React from "react";
import { Link } from "react-router-dom";
import "./CardList.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function CardList(props) {
  const card = props.ideas.map(idea => {
    const author = props.users.find(author => author.id === idea.user_id);
    return (
      <Link to={`/idea/${idea.id}`} key={idea.id} className="card_link">
        <div className="idea_card">
          <div className="project_info">
            <p>{author.nick_name}</p>
            <p>{idea.date_submitted}</p>
          </div>
          <h3 className="card_title">{idea.project_title}</h3>
          <p className="card_content">{truncate(idea.project_summary)}</p>
          <div className="card_vote">
            <ThumbUpIcon>thumb_down</ThumbUpIcon>
            <p className="votes_for">{idea.votes}</p>
            <ThumbDownIcon>thumb_down</ThumbDownIcon>
          </div>
        </div>
      </Link>
    );
  });
  return <div className="card_container">{card}</div>;
}

function truncate(content) {
  const words = content.split(" ");

  if (words.length > 15) {
    return words.slice(0, 20).join(" ") + "...";
  } else {
    return words.join(" ");
  }
}
