export const ACTIONS = {
  MESSAGE_SEND: 'MESSAGE_SEND', 
  MESSAGE_FAILED: 'MESSAGE_FAILED',
  MESSAGE_RECEIVED: 'MESSAGE_RECEIVED',
  USER_CHANGE: 'USER_CHANGE',
  SERVER_CONNECT: 'SERVER_CONNECT',
  SERVER_CONNECTED: 'SERVER_CONNECTED',
  SERVER_DISCONNECTED: 'SERVER_DISCONNECTED'
};

export const SOCKET = {
  MESSAGE_SEND: 'spotim/chat'
};

export const MESSAGE_STATUS = {
  SENDING: 0,
  SENT: 1,
  FAILED: 2,
  RECEIVED: 3
}

// TODO: Should be replaced with NODE_ENV or json config
export const SERVER_URL = 'https://spotim-demo-chat-server.herokuapp.com';

export const AVATARS = [
  'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png'
];