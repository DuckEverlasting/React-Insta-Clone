import React from "react";
import ls from "local-storage";
import PropTypes from "prop-types";
import "./post.css";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      likedBy: []
    }
  }

  componentDidMount() {
    this.setState({
      likes: ls.get(`likes_${this.props.id}`) || this.props.likes,
      likedBy: ls.get(`likedBy_${this.props.id}`) || []
    });
  }

  componentDidUpdate() {
    if (ls.get(`likes_${this.props.id}`) !== (this.state.likes)) {
      ls.set(`likes_${this.props.id}`, this.state.likes)
    }
    if (ls.get(`likedBy_${this.props.id}`) !== (this.state.likedBy)) {
      ls.set(`likedBy_${this.props.id}`, this.state.likedBy)
    }
  }

  addRemoveLike = () => {
    let i = this.state.likedBy.indexOf(this.props.currentUser)
    i !== -1 ?
    this.setState({
      likes: this.state.likes - 1,
      likedBy: [
        this.state.likedBy
        .slice(0, i)
        .concat(this.state.likedBy.slice(i + 1, this.state.likedBy.length))
      ]
    })
    :
    this.setState({
      likes: this.state.likes + 1,
      likedBy: [...this.state.likedBy, this.props.currentUser]
    })
  }

  likeClassHandler = () => {
    let output;
    let i = this.state.likedBy.indexOf(this.props.currentUser)
    i !== -1 ? output = "fas fa-heart" : output = "far fa-heart"
    return output;
  }

  render() {
    return (
      <div className="post">
        <header>
          <img className="thumb" src={this.props.thumbnailUrl} alt="" />
          <h2>{this.props.username}</h2>
        </header>
        <img className="image" src={this.props.imageUrl} alt="" />
        <div className="interact-section">
          <i className={this.likeClassHandler()} onClick={this.addRemoveLike} />
          <i className="far fa-comment reverse" />
        </div>
        <h2 className="likes-number">{this.state.likes} likes</h2>
      </div>
    );
  };
};

Post.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
