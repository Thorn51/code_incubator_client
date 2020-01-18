import React from "react";
import "./CardList.css";

export default class CardList extends React.Component {
  render() {
    const card = this.props.ideas.map(idea => (
      <div className="idea_card" key={idea.id}>
        <div className="project_info">
          <p>{idea.user_id}</p>
          <p>{idea.date_submitted}</p>
        </div>
        <h3 className="card_title">{idea.project_title}</h3>
        <p className="card_content">{idea.project_summary}</p>
        <div className="card_vote">
          <i className="material-icons">thumb_up</i>
          <p className="votes_for">{idea.votes}</p>
          <i className="material-icons">thumb_down</i>
        </div>
      </div>
    ));
    return <div className="card_container">{card}</div>;
  }
}
