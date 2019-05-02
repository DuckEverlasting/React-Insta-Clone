import React from "../../../node_modules/react";
import styled from "styled-components"

// BEGIN STYLING

const SCNewCommentBox = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 56px;
  border-top: 1px solid rgb(192, 192, 192);
`

const SCNewCommentInput = styled.textarea`
  max-height: 80px;
  line-height: 18px;
  height: ${props => props.height}px;
  width: 86%;
  padding: 0 2%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
  border: none;
  outline: none;
  resize: none;
`

const SCSubmitButton = styled.button`
  width: 10%;
  background: none;
  border: none;
  font-weight: 600;
  user-select: none;
  outline: none;
  cursor: pointer;
  color: rgb(57, 157, 240);

    &:disabled {
      color: rgb(154, 188, 216);
    }
  
`

// END STYLING

const NewCommentBox = props => {

  return (
    <SCNewCommentBox onSubmit={props.addNewComment} action="">
      <SCNewCommentInput
        className="add-comment-box"
        placeholder="Add a comment..."
        value={props.newInput}
        onChange={props.handleInputChanges}
        height={props.height}
      />
      <SCSubmitButton onClick={props.addNewComment} disabled={props.newInput === ""}>Post</SCSubmitButton>
    </SCNewCommentBox>
  );
};
export default NewCommentBox;
