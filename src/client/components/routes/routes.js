import Home from "../Home";
import Chat from "../Chat";

export default [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    path: "/chat",
    component: Chat
  }
];
