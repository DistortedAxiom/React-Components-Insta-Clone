//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import {useState} from "react";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {data.map((el, i) => (
        <Post key={i} post={el} />
      ))}
    </div>
  );
};

export default PostsPage;
