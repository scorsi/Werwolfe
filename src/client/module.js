import {Module} from "cerebral";

function connectSocket({io, state}) {
  const socket = io();
  socket.on('disconnect', () => {
    connectSocket({io, state});
  });
  socket.on('message', (message) => {
    state.set('messages', [...state.get('messages'), message]);
  });
  socket.on('login', (username) => {
    console.log(username);
    state.set('authenticated', true);
    state.set('username', username);
  });
  state.set('socket', socket);
}

function sendMessage({state, props: {message}}) {
  const socket = state.get('socket');
  socket.emit('message', message);
}

function logout({state}) {
  state.set('authenticated', false);
  state.set('username', undefined);
}

function login({state, props: {username}}) {
  const socket = state.get('socket');
  socket.emit('login', username);
}

export default Module({
  state: {
    // Shall be initialized later in the client since this file is shared with the server
    socket: undefined,
    messages: [],
    authenticated: false,
    username: undefined
  },
  signals: {
    connectSocket: [connectSocket],
    sendMessage: [sendMessage],
    login: [logout, login],
    logout: [logout]
  },
  providers: {
    // Shall be initialized later in the client since this file is shared with the server
    io: undefined
  }
});
