import React from "react";
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          className={s.profilePicture}
          src="https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/beach-sunset-i102003.jpg"
          alt="background"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
}
export default ProfileInfo;
