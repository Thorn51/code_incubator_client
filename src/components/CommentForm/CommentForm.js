import React from "react";
import "./CommentForm.css";

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleChange(comment) {
    this.setState({
      comment
    });
  }

  submitComment(e) {
    e.preventDefault();
    const newComment = {
      id: 0,
      user_id: "3",
      project_id: this.props.projectId,
      comment_text: this.state.comment,
      date_submitted: new Date().toLocaleDateString(),
      votes: 0
    };
    this.props.handleComment(newComment);
    this.setState({
      comment: ""
    });
  }

  render() {
    return (
      <form className="comment_form" onSubmit={e => this.submitComment(e)}>
        <h2 className="section_title">Comment</h2>
        <hr />
        <label htmlFor="comment">Leave your thoughts and ideas.</label>
        <textarea
          name="comment"
          cols="30"
          rows="15"
          className="comment"
          id="comment"
          value={this.state.comment}
          onChange={e => this.handleChange(e.target.value)}
        ></textarea>
        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
    );
  }
}
