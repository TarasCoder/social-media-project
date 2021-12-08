import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi there! It is message 1!" },
      { id: 2, message: "Hi there! It is message 2!" },
      { id: 3, message: "Hi there! It is message 3!" },
      { id: 4, message: "Hi there! It is message 4!" },
      { id: 5, message: "Hi there! It is message 5!" },
    ],
    newPostText: "it-kamasutra.com React!",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andriy" },
      { id: 3, name: "Svitlana" },
      { id: 4, name: "Lesya" },
      { id: 5, name: "Kolya" },
    ],
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Do you like kourse?" },
      { id: 4, message: "Yo" },
      { id: 5, message: "You are best kamasutra)" },
    ],
  },
  sidebar: {
    friends: [{ name: "Ira" }, { name: "Andrew" }, { name: "Mike" }],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText=(newText);
  renderEntireTree(state);
};
export default state;
