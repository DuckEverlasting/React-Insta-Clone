import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      likedBy: []
    }
  }

  addLike = () => {
    if (this.state.likedBy.includes(this.props.currentUser)) {return}
    this.setState({
      likes: this.state.likes + 1,
      likedBy: [...this.state.likedBy, this.props.currentUser]
    })
  }

  render() {
    return (
      <div className="post" data-id={this.props.id}>
        <header>
          <img className="thumb" src={this.props.thumbnailUrl} alt="" />
          <h2>{this.props.username}</h2>
        </header>
        <img className="image" src={this.props.imageUrl} alt="" />
        <div className="interact-section">
          <i className="far fa-heart" onClick={this.addLike} />
          <i className="far fa-comment reverse" />
          <h2>{this.state.likes} likes</h2>
        </div>
        <CommentSection
          id={this.props.id}
          comments={this.props.comments}
          timestamp={this.props.timestamp}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  };
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Post;
