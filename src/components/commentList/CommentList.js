import React from "react";
import "./CommentList.css";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";
import ApiService from "../../services/api-service";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    ApiService.getAllComments().then(data => {
      const project = parseInt(this.props.project);
      const projectComments = data.filter(
        comment => comment.project === project
      );
      this.setState({
        comments: projectComments
      });
    });
  }

  handleComment = newComment => {
    this.setState({
      comments: [...this.state.comments, newComment]
    });
  };

  render() {
    const comment = this.state.comments.map(comment => (
      <Comment key={comment.id} id={comment.id} />
    ));
    return (
      <section className="feedback">
        <h2 className="section_title">Feedback</h2>
        <div className="comment_list">{comment}</div>
        <div className="submit_feedback">
          <CommentForm
            handleComment={this.handleComment}
            project={this.props.project}
          />
        </div>
      </section>
    );
  }
}
