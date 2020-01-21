import React from "react";
import "./CommentForm.css";

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      date_submitted: "",
      author: "",
      votes: 0
    };
  }

  addComment(comment) {
    this.setState({
      comment
    });
  }

  render() {
    return (
      <form className="comment_form">
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
          onChange={e => this.addComment(e.target.value)}
        ></textarea>
        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
    );
  }
}
