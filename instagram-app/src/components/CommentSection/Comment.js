import React from "../../../node_modules/react";
import styled from "styled-components";

// BEGIN STYLING

const SCComment = styled.div`
  margin-bottom: 10px;
`
const SCUsername = styled.h2`
  display: inline;
  margin: 0;
`
const SCText = styled.p`
  display: inline;
  margin-left: .5rem;
`

const SCDeleteButton = styled.button`
  display: ${props => (props.deleteVisible ? "inline-block" : "none")};
  margin-left: 10px;
  background: white;
  font-size: 0.75rem;
  border-radius: 20px;
`

//END STYLING

const deleteClassHandler = props => {
  return props.username === props.currentUser;
};

const CommentSection = props => {
  return (
    <SCComment key={props.id}>
      <SCUsername>{props.username}</SCUsername>
      <SCText>{props.text}</SCText>
      <SCDeleteButton
        deleteVisible={deleteClassHandler(props)}
        onClick={props.deleteComment}
      >
        delete
      </SCDeleteButton>
    </SCComment>
  );
};
export default CommentSection;
