import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import CommentSection from "../CommentSection/CommentSection"
import "./post.css";

const PostContainer = props => {
  return (
    <>
      {props.data.map((el) => (
        <div className="post-container">
          <Post
          key={el.timestamp}
          thumbnailUrl={el.thumbnailUrl}
          username={el.username}
          imageUrl={el.imageUrl}
          likes={el.likes}
          currentUser={props.currentUser}
        />
          <CommentSection
            key={el.timestamp}
            id={el.timestamp}
            comments={el.comments}
            timestamp={el.timestamp}
            currentUser={props.currentUser}
          />
        </div>
      ))}
      <p className={props.emptyHandler()}>
        We're sorry, there don't seem to be any posts by users
        of that name.
      </p>
    </>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.string.isRequired
};

export default PostContainer;