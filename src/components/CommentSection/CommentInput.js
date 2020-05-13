// You do not need to do anything in this file
import React, { useState } from 'react';
import Comment from './Comment';

const CommentInput = (props) => {

  const [comment, updateComment] = useState("");

  var user = 'Anh';

  var obj = {
    username: `${user}`,
    text: `${comment}`
  }


  return (
    <form className="comment-form" onSubmit={(e) => {
    e.preventDefault();
    props.submitComment(obj)
    updateComment("");
    }}>
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
