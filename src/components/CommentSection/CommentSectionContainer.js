// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  // By calling <CommentInput submitComment={submitComment}/>, we can call the "obj" variable from CommentInput.JS . All this is doing is refering the variable "obj" as the props to be utilize for the state here
  // We can then create a copy of the current comment state with [...comments] and add the "obj" variable to it, making <Comment /> update with the newComment

  const submitComment = (newComment) => {
    setComments([...comments, newComment])
  }

  return (
    <div>
      {comments.map((el, i) => (
        <Comment key={i} comment={el} />
      ))}
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
