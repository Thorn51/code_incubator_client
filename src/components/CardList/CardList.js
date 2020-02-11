import React from "react";
import { Link } from "react-router-dom";
import "./CardList.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default function CardList(props) {
  const card = props.ideas.map(idea => {
    const author = props.users.find(author => author.id === idea.author);
    return (
      <Link to={`/idea/${idea.id}`} key={idea.id} className="card_link">
        <div className="idea_card">
          <div className="project_info">
            <p>An idea from {author.nickname}</p>
          </div>
          <h3 className="card_title">{idea.project_title}</h3>
          <p className="card_content">{truncate(idea.project_summary)}</p>
          <div className="card_vote">
            {idea.votes > 0 ? (
              <p className="votes_for">+{idea.votes} Thumbs Up!</p>
            ) : (
              <p className="votes_for">Give some Feedback!</p>
            )}
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

CardList.defaultProps = {
  ideas: [],
  users: []
};
