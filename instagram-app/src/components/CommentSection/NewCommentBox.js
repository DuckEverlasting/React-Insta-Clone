import React from "react";
import "./comment.css";

const NewCommentBox = props => {
  return (
    <form onSubmit={props.addNewComment} action="">
      <input
        className="add-comment-box"
        type="text"
        placeholder="Add a comment..."
        value={props.newInput}
        onChange={props.handleInputChanges}
      />
    </form>
  );
};
export default NewCommentBox;
