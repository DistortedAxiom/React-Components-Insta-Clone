// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  const submitComment = (comment) => {
    setComments([...comments, comment])
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
