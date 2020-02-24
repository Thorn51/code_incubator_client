import React from "react";
import "./CommentList.css";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comment from "../../components/Comment/Comment";
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
      const projectComments = data.filter(
        comment => comment.project == this.props.project
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
