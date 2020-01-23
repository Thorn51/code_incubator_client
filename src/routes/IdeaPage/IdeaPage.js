import React from "react";
import "./IdeaPage.css";
import NavBar from "../../components/Navigation/NavBar";
import Idea from "../../components/Idea/Idea";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
import Footer from "../../components/Footer/Footer";

export default function IdeaPage(props) {
  const idea = props.ideas.find(idea => idea.id === props.match.params.ideaId);
  const ideaComments = props.comments.filter(
    comment => comment.project_id === props.match.params.ideaId
  );
  const projectAuthor = props.users.find(author => author.id === idea.user_id);
  const comment = ideaComments.map(comment => (
    <Comment
      key={comment.id}
      id={comment.id}
      votes={comment.votes}
      content={comment.comment_text}
      author={comment.user_id}
      date={comment.date_submitted}
      commentUpVote={props.commentUpVote}
      commentDownVote={props.commentDownVote}
    />
  ));
  return (
    <div>
      <NavBar />
      <Idea
        idea={idea}
        author={projectAuthor}
        projectUpVote={props.projectUpVote}
        projectDownVote={props.projectDownVote}
      />
      <section className="feedback">
        <h2 className="section_title">Feedback</h2>
        {comment}
        <CommentForm projectId={idea.id} handleComment={props.handleComment} />
      </section>
      <Footer />
    </div>
  );
}
