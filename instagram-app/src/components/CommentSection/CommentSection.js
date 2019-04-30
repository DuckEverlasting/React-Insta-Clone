import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Comment from "./Comment";
import NewCommentBox from "./NewCommentBox";
import "./comment.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: "",
      comments: this.props.comments
    };
  }

  handleInputChanges = ev => {
    this.setState({
      newInput: ev.target.value
    });
  };

  addNewComment = ev => {
    ev.preventDefault();
    if (this.state.newInput === "") {
      return;
    }
    const currentUser = this.props.currentUser;
    const text = this.state.newInput;
    this.setState({
      comments: [...this.state.comments, { username: currentUser, text: text }],
      newInput: ""
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map((el, i) => (
          <Comment data-id={i} username={el.username} text={el.text} />
        ))}
        <p className="timestamp">
          {moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}
        </p>
        <NewCommentBox
          data-id={this.props.id}
          newInput={this.state.newInput}
          handleInputChanges={this.handleInputChanges}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CommentSection;
