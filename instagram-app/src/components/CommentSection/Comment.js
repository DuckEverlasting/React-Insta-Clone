import React from 'react'
import PropTypes from "prop-types";
import './comment.css'

const CommentSection = (props) => {
  return(
    <div className="comment">
      <h2>{props.username}</h2>
      <p>{props.text}</p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default CommentSection;