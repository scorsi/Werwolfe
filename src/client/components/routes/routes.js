import Home from "../Home";
import Login from "../Login";

export default [
  {
    exact: true,
    authenticated: undefined,
    path: "/",
    component: Home
  },
  {
    exact: true,
    authenticated: false,
    path: "/login",
    component: Login
  },
  {
    exact: true,
    authenticated: true,
    path: "/lobbies",
    component: Home
  }
];
