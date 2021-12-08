import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

function MyPosts(props) {
  let postData = props.posts;
  let newPostElement = React.createRef();

  function handleClick() {
    props.addPost();
  }
  function onPostChange() {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={s.postBlock}>
      <h3>My Posts</h3>
      <div className={s.inputZone}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            cols="25"
            rows="4"
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={handleClick}>Add post</button>
        </div>
      </div>
      <div>
        {postData.map((p) => (
          <Post message={p.message} />
        ))}
      </div>
    </div>
  );
}
export default MyPosts;
