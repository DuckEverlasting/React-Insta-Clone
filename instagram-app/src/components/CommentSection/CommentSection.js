import React from 'react'
import Comment from './Comment'
import './comment.css'

const CommentSection = (props) => {
  return(
    <div className="comment-section">
      {props.comments.map((el, i) => <Comment username={el.username} text={el.text} />)}
      <p className="timestamp">{props.timestamp}</p>
      <input className="add-comment-box" type="text" placeholder="Add a comment..."/>
    </div>
  )
}

export default CommentSection;