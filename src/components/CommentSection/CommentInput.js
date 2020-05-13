// You do not need to do anything in this file
import React, { useState } from 'react';
import Comment from './Comment';

const CommentInput = () => {

  const [comment, updateComment] = useState("");
  const user = "Anh";

  const obj = {
        username: `${user}`,
        text: `${comment}`,
  }

  const submitComment = (e) => (
    e.preventDefault(),
    console.log(obj),
    <Comment comment={obj}/>,
    updateComment("")
  );

  return (
    <form className="comment-form" onSubmit={submitComment}>
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        onChange={(e) => updateComment(e.target.value)}
      />
    </form>
  );

};

export default CommentInput;
