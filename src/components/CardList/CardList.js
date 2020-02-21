import React from "react";
import { Link } from "react-router-dom";
import "./CardList.css";

export default function CardList(props) {
  //Create cards for homepage
  const card = props.ideas.map(idea => {
    //Identify author of idea to use on card
    const author = props.users.find(author => author.id === idea.author);
    return (
      <Link to={`/idea/${idea.id}`} key={idea.id} className="card_link">
        <div className="idea_card">
          <div className="project_info">
            {author && <p>An idea from {author.nickname}</p>}
          </div>
          <h3 className="card_title">{idea.project_title}</h3>
          <p className="card_content">{truncate(idea.project_summary)}</p>
          <div className="card_vote">
            {/* Todo -> add number of comments to card */}
            {/* Only display votes on card if there are some */}
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
  return (
    <section className="latest_ideas">
      <div className="card_container">{card}</div>
    </section>
  );
}

//Function limits the number of words on card to 15
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
