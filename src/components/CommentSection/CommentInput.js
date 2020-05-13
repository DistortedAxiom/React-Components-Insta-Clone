// You do not need to do anything in this file
import React, { useState } from 'react';
import Comment from './Comment';

const CommentInput = (props) => {

  const [comment, updateComment] = useState("");

  // Set an user and taking comment from input, then make it into an object for use a prop by <Comment />

  var user = 'Anh';

  var obj = {
    username: `${user}`,
    text: `${comment}`
  }


  return (
    <form className="comment-form" onSubmit={(e) => {
    // Push "obj" to a function called submitComment so that it can be referenced in CommentSectionContainer.js
    // Call updateComment("") to reset the input field after submitted
    e.preventDefault();
    props.submitComment(obj);
    updateComment("");
    }}>
      <input
        type="text"
        value={comment}
        placeholder="Add comment... "
        // On typing in the input field, we change the "comment" state to whatever inside the input
        onChange={(e) => updateComment(e.target.value)}
      />
    </form>
  );

};

export default CommentInput;
