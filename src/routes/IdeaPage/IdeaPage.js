import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import STORE from "../../STORE";

export default function IdeaPage(props) {
  const { ideas, comments, users } = STORE;
  const idea = ideas.find(idea => idea.id === props.match.params.ideaId);
  const ideaComments = comments.filter(
    comment => comment.project_id === props.match.params.ideaId
  );
  const projectAuthor = users.find(author => author.id === idea.user_id);
  const comment = ideaComments.map(comment => (
    <Comment
      key={comment.id}
      votes={comment.votes}
      content={comment.comment_text}
      author={comment.user_id}
      date={comment.date_submitted}
    />
  ));
  return (
    <div>
      <NavBar />
      <header className="idea_page_header">
        <h1 className="app_name">{idea.project_title}</h1>
        <div className="project_vote">
          <ThumbUpIcon>thumb_up</ThumbUpIcon>
          <p className="votes_for">{idea.votes}</p>
          <ThumbDownIcon>thumb_down</ThumbDownIcon>
        </div>
      </header>
      <section className="project_details">
        <span className="project_author">
          Submitted by: {projectAuthor.nick_name}
        </span>
        <span className="date_submitted">Submitted: {idea.date_submitted}</span>
        <span className="project_status">Status: {idea.status}</span>
        <span className="repo">Repo: {idea.github}</span>
      </section>

      <section className="idea_description">
        <h2 className="section_title">Overview</h2>
        <p>{idea.project_summary}</p>
      </section>
      <section className="feedback">
        <h2 className="section_title">Feedback</h2>
        {comment}
        <CommentForm />
      </section>
      <Footer />
    </div>
  );
}
