import React from "react";
import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"

function Profile() {
  return (
    <div>
      <div>
        <img
          src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/beach-sunset-i102003.jpg"
          alt="background"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}
export default Profile;
