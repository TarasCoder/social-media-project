import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  let msgData = props.state.messages;
  let dialogsData = props.state.dialogs;
  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsData.map(n => <DialogItem name={n.name} id={n.id} /> )}
        </div>
        <div className={s.messages}>
          {msgData.map(m => <Message message={m.message} id={m.id} />)}
        </div>
      </div>
    </div>
  );
}
export default Dialogs;
