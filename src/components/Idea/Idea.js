import React from "react";
import "./Idea.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import moment from "moment";

export default function Idea(props) {
  return (
    <>
      <header className="idea_page_header">
        <h1 className="app_name">{props.idea.project_title}</h1>
        <div className="project_vote">
          <ThumbUpIcon onClick={() => props.projectUpVote(props.idea.id)}>
            thumb_up
          </ThumbUpIcon>
          <p className="votes_for">{props.idea.votes}</p>
          <ThumbDownIcon onClick={() => props.projectDownVote(props.idea.id)}>
            thumb_down
          </ThumbDownIcon>
        </div>
      </header>
      <section className="project_details">
        <span className="project_author">
          Submitted by: {props.author.nickname}
        </span>
        <span className="date_submitted">
          Submitted: {moment(props.idea.date_submitted).format("MMM Do YYY")}
        </span>
        <span className="project_status">Status: {props.idea.status}</span>
        <span className="repo">Repo: {props.idea.github}</span>
      </section>

      <section className="idea_description">
        <h2 className="section_title">Overview</h2>
        <p>{props.idea.project_summary}</p>
      </section>
    </>
  );
}

Idea.defaultProps = {
  idea: {},
  author: {}
};
