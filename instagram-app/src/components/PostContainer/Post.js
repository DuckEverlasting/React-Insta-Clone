import React from "../../../node_modules/react";
import ls from "local-storage";
import PropTypes from "../../../node_modules/prop-types";
import styled from "styled-components"

// BEGIN STYLING

const SCHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`
const SCThumbnail = styled.img`
  height: 30px;
  margin: 0 10px 0 2%;
  border-radius: 50%;
`
const SCImage = styled.img`
  width: 100%;
`
const SCInteractSection = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  margin: 15px 0 0 2%;
`
const SCLikeIcon = styled.i`
  color: ${props => props.styleHandler ? "rgb(54, 54, 54)" : "red"};
  font-size: ${props => props.styleHandler ? "20px" : "22px"};
  margin-left: 1px;
  transition: font-size .1s;
  cursor: pointer;
`
const SCCommentIcon = styled.i`
  color: rgb(54, 54, 54);
  font-size: 22px;
  padding-right: 10px;
  transform: scale(-1, 1);
  cursor: pointer;
`
const SCLikesNumber = styled.h2`
  margin: 0 0 15px 2%;
`


// END STYLING

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      likedBy: [],
      newCommentOpen: false
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

  likeStyleHandler = () => {
    return (this.state.likedBy.indexOf(this.props.currentUser) === -1)
  }

  render() {
    return (
      <div className="post">
        <SCHeader>
          <SCThumbnail src={this.props.thumbnailUrl} alt="" />
          <h2>{this.props.username}</h2>
        </SCHeader>
        <SCImage src={this.props.imageUrl} alt="" />
        <SCInteractSection>
          <SCLikeIcon styleHandler={this.likeStyleHandler()} className={this.likeClassHandler()} onClick={this.addRemoveLike} />
          <SCCommentIcon className="far fa-comment" />
        </SCInteractSection>
        <SCLikesNumber >{this.state.likes} likes</SCLikesNumber>
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
