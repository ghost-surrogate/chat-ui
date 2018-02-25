import uuidv1 from 'uuid/v1';
import { ACTIONS, SOCKET } from '../constants';

export function sendMessage(text) {
  return (dispatch, getState) => {
    const id = uuidv1();
    const user = getState().user;
    const message = { id, avatar: user.avatar, username: user.username, text, createdAt: Date.now() };
    dispatch({
      type: ACTIONS.MESSAGE_SEND,
      message,
      socket: {
        event: SOCKET.MESSAGE_SEND,
        payload: message
    }});
  };
}