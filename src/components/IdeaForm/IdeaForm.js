import React from "react";
import "./IdeaForm.css";
import "../ValidationError/ValidationError";
import ValidationError from "../ValidationError/ValidationError";

export default class IdeaForm extends React.Component {
  state = {
    project_title: {
      value: "",
      touched: false
    },
    project_summary: {
      value: "",
      touched: false
    },
    status: "Idea",
    repo: ""
  };

  handleTitleChange(title) {
    this.setState({
      project_title: {
        value: title,
        touched: true
      }
    });
  }

  handleSummaryChange(summary) {
    this.setState({
      project_summary: {
        value: summary,
        touched: true
      }
    });
  }

  handleStatusChange(status) {
    this.setState({
      status
    });
  }

  handleRepoChange(repo) {
    this.setState({
      repo
    });
  }

  validateTitle() {
    const title = this.state.project_title.value.trim();
    if (title.length === 0) {
      return "The project requires a title.";
    }
  }

  validateSummary() {
    const summary = this.state.project_summary.value.trim();
    if (summary.length === 0) {
      return "The project requires a summary.";
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newIdea = {
      id: 0,
      user_id: "1",
      project_title: this.state.project_title.value,
      project_summary: this.state.project_summary.value,
      date_submitted: new Date().toLocaleDateString(),
      status: this.state.status,
      github: this.state.repo,
      votes: 0
    };

    this.props.handleNewIdea(newIdea);
    this.setState({
      project_title: {
        value: "",
        touched: false
      },
      project_summary: {
        value: "",
        touched: false
      },
      stats: "Idea",
      github: ""
    });
    this.props.history.push("/");
  }
  render() {
    const validateTitle = this.validateTitle();
    const validateSummary = this.validateSummary();
    return (
      <form className="idea_form" onSubmit={e => this.handleSubmit(e)}>
        <h2 className="section_title">Project Idea</h2>
        <hr />
        <label htmlFor="project_title">Project Name</label>
        <input
          type="text"
          name="project_title"
          id="project_title"
          value={this.state.project_title.value}
          onChange={e => this.handleTitleChange(e.target.value)}
        />
        {this.state.project_title.touched && (
          <ValidationError message={validateTitle} />
        )}
        <label htmlFor="project_summary">Share your coding project idea:</label>
        <textarea
          name="idea"
          cols="30"
          rows="15"
          className="project_summary"
          id="project_summary"
          value={this.state.project_summary.value}
          onChange={e => this.handleSummaryChange(e.target.value)}
        ></textarea>
        {this.state.project_summary.touched && (
          <ValidationError message={validateSummary} />
        )}
        <label htmlFor="project_status">Project Status</label>
        <select
          name="status"
          id="project_status"
          value={this.state.status}
          onChange={e => this.handleStatusChange(e.target.value)}
        >
          <option defaultValue="Idea">Idea</option>
          <option value="In Development">In Development</option>
          <option value="Complete">Complete</option>
        </select>
        <label htmlFor="github">GitHub Repo URL (Optional)</label>
        <input
          type="url"
          name="github"
          id="github"
          value={this.state.repo}
          onChange={e => this.handleRepoChange(e.target.value)}
        />
        <button
          type="submit"
          className="form_button"
          disabled={this.validateTitle() || this.validateSummary()}
        >
          Submit
        </button>
      </form>
    );
  }
}
