import React from "../../../node_modules/react";
import "./comment.css";

const deleteClassHandler = (props) => {
  if (props.username === props.currentUser) {
    return "delete-button visible"
  } else {
    return "delete-button"
  }
}

const CommentSection = props => {
  return (
    <div className="comment" key={props.id}>
      <h2>{props.username}</h2>
      <p>{props.text}</p>
      <button className={deleteClassHandler(props)} onClick={props.deleteComment} >delete</button>
    </div>
  );
};
export default CommentSection;
