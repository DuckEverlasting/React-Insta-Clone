import React from "../../../node_modules/react";
import styled from "styled-components"

// BEGIN STYLING

const SCNewCommentInput = styled.input`
  height: 2rem;
  width: 100%;
  border: none;
  border-top: 1px solid darkgrey;
  outline: none;
`

// END STYLING

const NewCommentBox = props => {
  return (
    <form onSubmit={props.addNewComment} action="">
      <SCNewCommentInput
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
