import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css"

function DialogItem(props) {
  return (
    <div className={s.dialog}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU" alt="avatar" />
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}

export default DialogItem;
