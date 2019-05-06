import React from "../../../node_modules/react";
import ls from "local-storage";
import PropTypes from "../../../node_modules/prop-types";
import moment from "../../../node_modules/moment/moment";
import Comment from "./Comment";
import NewCommentBox from "./NewCommentBox";
import styled from "styled-components"

// BEGIN STYLING

const SCCommentSectionDiv = styled.div`
  width: 96%;
  margin: 0 2%;
`
const SCTimestamp = styled.div`
  font-size: .8rem;
  color: grey;
  margin-bottom: 10px;
`

// END STYLING

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newInput: "",
      newInputHeight: 18,
      comments: this.props.comments,
      // timestamp: this.props.timestamp
    };
  }

  componentDidMount() {
    this.setState({
      comments: ls.get(`comments_${this.props.id}`) || this.state.comments,
      // timestamp: ls.get(`last-comment_${this.props.id}`) || this.state.timestamp
    });
  }

  handleInputChanges = ev => {
    this.setState({
      newInput: ev.target.value,
      newInputHeight: ev.target.scrollHeight,
    });
  };

  addNewComment = ev => {
    ev.preventDefault();
    if (this.state.newInput === "") {
      return;
    }
    const currentUser = this.props.currentUser;
    const text = this.state.newInput;
    // const freshTimestamp = moment().format("MMMM Do YYYY, hh:mm:ss a");
    ls.set(`comments_${this.props.id}`, [
      ...this.state.comments,
      { username: currentUser, text: text }
    ]);
    // ls.set(`last-comment_${this.props.id}`, freshTimestamp);
    this.setState({
      newInput: "",
      comments: [
        ...this.state.comments,
        { username: currentUser, text: text }
      ],
      // timestamp: freshTimestamp
    });
  };

  deleteComment = i => {
    const newComments = this.state.comments
      .slice(0, i)
      .concat(this.state.comments.slice(i + 1, this.state.comments.length));
    ls.set(`comments_${this.props.id}`, newComments)
    this.setState({
      comments: newComments
    });
  };

  render() {
    return (
      <>
        <SCCommentSectionDiv key={this.props.id}>
          {this.state.comments.map((el, i) => (
            <Comment
              key={`${this.props.id}_${i}`}
              username={el.username}
              text={el.text}
              currentUser={this.props.currentUser}
              deleteComment={() => this.deleteComment(i)}
            />
          ))}
          <SCTimestamp>
            {/* TO CHANGE TIMESTAMP TO LAST COMMENT, SWITCH 
            PROPS TO STATE HERE AND UNCOMMENT CODE ABOVE */}
            {moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}
          </SCTimestamp>
        </SCCommentSectionDiv>
        <NewCommentBox
            key={`${this.props.id}_new-comment-box`}
            newInput={this.state.newInput}
            handleInputChanges={this.handleInputChanges}
            addNewComment={this.addNewComment}
            height={this.state.newInputHeight}
        />
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CommentSection;
