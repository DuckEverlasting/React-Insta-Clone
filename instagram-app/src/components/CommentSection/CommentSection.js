import React from 'react'
import PropTypes from "prop-types";
import moment from 'moment'
import Comment from './Comment'
import './comment.css'

const CommentSection = (props) => {
  return(
    <div className="comment-section">
      {props.comments.map((el, i) => <Comment username={el.username} text={el.text} />)}
      <p className="timestamp">{moment(props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</p>
      <input className="add-comment-box" type="text" placeholder="Add a comment..."/>
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })).isRequired,
}

export default CommentSection;