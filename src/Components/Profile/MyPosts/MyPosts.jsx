import React from "react";
import Post from "./Post/Post"
import s from "./MyPosts.module.css"

function MyPosts() {
  return (
      <div>
        My Posts
        <div>
          <Post message="Hi there! It is message!"/>
          <Post message="Hi there! It is message!"/>
          <Post message="Hi there! It is message!"/>
        </div>
      </div>
  );
}
export default MyPosts;
