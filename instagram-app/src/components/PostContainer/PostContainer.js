import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./post.css";

const PostContainer = props => {
  return (
    <div>
      {props.data.map((el, i) => (
        <div className="post" data-id={i}>
          <header>
            <img className="thumb" src={el.thumbnailUrl} alt="" />
            <h2>{el.username}</h2>
          </header>
          <img className="image" src={el.imageUrl} alt="" />
          <div className="interact-section">
            <i className="far fa-heart" onClick={(ev) => {props.addLike(ev, i)}} />
            <i className="far fa-comment reverse" />
            <h2>{el.likes} likes</h2>
          </div>
          <CommentSection
            id={i}
            comments={el.comments}
            timestamp={el.timestamp}
            currentUser={props.currentUser}
          />
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
  ).isRequired
};

export default PostContainer;
