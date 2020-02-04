import React from "react";
import "./CommentForm.css";
import config from "../../config";

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
      author: 3,
      project: this.props.project,
      comment_text: this.state.comment,
      votes: 0
    };

    const options = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${config.API_TOKEN}`
      }
    };

    fetch(config.API_ENDPOINT + "/api/comments", options)
      .then(response => {
        if (!response.ok) {
          throw new Error("There has been a problem posting the comment");
        } else {
          return response.json();
        }
      })
      .then(data => {
        this.setState({
          comment: ""
        });
        this.props.handleComment(data);
      })
      .catch(error => {
        console.log(error);
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
