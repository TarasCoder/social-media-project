import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts(props) {
let postData = props.posts;
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div>
        {postData.map((p) => (
          <Post message={p.message} />
        ))}
      </div>
    </div>
  );
}
export default MyPosts;
