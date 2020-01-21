import React from "react";
import "./IdeaForm.css";

export default class IdeaForm extends React.Component {
  render() {
    return (
      <form className="idea_form">
        <h2 className="section_title">Project Idea</h2>
        <hr />
        <label htmlFor="project_name">Project Name</label>
        <input type="text" name="name" id="project_name" />
        <label htmlFor="idea_text">Share your coding project idea:</label>
        <textarea
          name="idea"
          cols="30"
          rows="15"
          className="comment"
          id="idea_text"
        ></textarea>
        <label htmlFor="project_status">Project Status</label>
        <select name="status" id="project_status">
          <option value="idea">Idea</option>
          <option value="development">In Development</option>
          <option value="complete">Complete</option>
        </select>
        <label htmlFor="github">GitHub Repo URL (Optional)</label>
        <input type="url" name="github" id="github" />
        <button type="submit" className="form_button">
          Submit
        </button>
      </form>
    );
  }
}
