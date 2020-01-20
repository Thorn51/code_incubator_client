import React from "react";
import "./CardList.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

export default class CardList extends React.Component {
  static defaultProps = {
    ideas: []
  };
  render() {
    const { ideas } = this.props;
    const card = ideas.map(idea => (
      <div className="idea_card" key={idea.id}>
        <div className="project_info">
          <p>{idea.user_id}</p>
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
    ));
    return <div className="card_container">{card}</div>;
  }
}

function truncate(content) {
  const words = content.split(" ");

  if (words.length > 15) {
    return words.slice(0, 20).join(" ") + "...";
  }
}
