import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

function MyPosts() {

  let postData = [
    { id: 1, message: "Hi there! It is message 1!" },
    { id: 2, message: "Hi there! It is message 2!" },
    { id: 3, message: "Hi there! It is message 3!" },
    { id: 4, message: "Hi there! It is message 4!" },
    { id: 5, message: "Hi there! It is message 5!" },
  ];

  return (
      <div className={s.postBlock}>
        <h3>My Posts</h3>
        <div>
          {postData.map(p => <Post message={p.message}/>)}
        </div>
      </div>
  );
}
export default MyPosts;
