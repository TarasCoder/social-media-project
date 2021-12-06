import React from "react";
import s from "./Friends.module.css";

function Friends(props) {
  return (
      <div>
        <img className={s.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNU22TXbkcX-uklS2Ebx_xS-lBNJCKHNFiIQ&usqp=CAU" alt="avatar" />
        <p>{props.name}</p>
      </div>
  );
}

export default Friends;
