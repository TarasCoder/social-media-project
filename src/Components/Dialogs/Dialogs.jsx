import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function DialogItem(props) {
  return (
    <div className={s.dialog}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
}
function Message(props) {
  return <div className={s.message}>{props.message}</div>;
}

let dialogsData = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andriy" },
  { id: 3, name: "Svitlana" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Kolya" },
];
let messagesData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Do you like kourse?" },
  { id: 4, message: "Yo" },
  { id: 5, message: "You are best)" },
];

function Dialogs() {
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsData.map(n => <DialogItem name={n.name} id={n.id} /> )}
        </div>
        <div className={s.messages}>
          {messagesData.map(m => <Message message={m.message} id={m.id} />)}
        </div>
      </div>
    </div>
  );
}
export default Dialogs;
