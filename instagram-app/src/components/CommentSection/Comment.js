import React from 'react'
import './comment.css'

const CommentSection = (props) => {
  return(
    <div className="comment">
      <h2>{props.username}</h2>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentSection;