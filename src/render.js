import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
    document.getElementById("root")
  );
};
