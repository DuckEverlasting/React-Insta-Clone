import React from "react";
import "./comment.css";

const deleteClassHandler = (props) => {
  console.log(props.currentUser)
  if (props.username === props.currentUser) {
    return "delete-button visible"
  } else {
    return "delete-button"
  }
}

const CommentSection = props => {
  return (
    <div className="comment">
      <h2>{props.username}</h2>
      <p>{props.text}</p>
      <button className={deleteClassHandler(props)}>delete</button>
    </div>
  );
};
export default CommentSection;
