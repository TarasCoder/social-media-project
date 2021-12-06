import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

function Dialogs(props) {
  let msgData = props.state.messages;
  let dialogsData = props.state.dialogs;
  let newMessage = React.createRef();

  function handleClick() {
    console.log(newMessage.current.value)
  }

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsData.map((n) => (
            <DialogItem name={n.name} id={n.id} />
          ))}
        </div>
        <div className={s.messages}>
          {msgData.map((m) => (
            <Message message={m.message} id={m.id} />
          ))}
          <div>
            <textarea ref={newMessage} cols="30" rows="5"></textarea>
            <div>
              <button onClick={handleClick}>Add message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;
