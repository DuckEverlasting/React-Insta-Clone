import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import "./post.css";

const PostContainer = props => {
  return (
    <div>
      {props.data.map((el, i) => (
        <Post
          id={i}
          thumbnailUrl={el.thumbnailUrl}
          username={el.username}
          imageUrl={el.imageUrl}
          likes={el.likes}
          comments={el.comments}
          timestamp={el.timestamp}
          currentUser={props.currentUser}
        />
      ))}
      <p className={props.emptyHandler()}>
        We're sorry, there don't seem to be any posts by users
        of that name.
      </p>
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PostContainer;