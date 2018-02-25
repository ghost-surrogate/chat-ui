import io from 'socket.io-client';
import { ACTIONS } from '../constants';
import { SERVER_URL } from '../constants';

let socket;

export default () => {
  
  const initializeSocket = dispatch => {

    socket = io(SERVER_URL);

    socket.on('spotim/chat', (message) => {
      dispatch({
        type: ACTIONS.MESSAGE_RECEIVED,
        message,
      });
      console.log('socket:on:spotim/chat', message);
    });

    socket.on('disconnect', () => {
      dispatch({type: ACTIONS.SERVER_DISCONNECTED});
      console.log('socket:disconnect');
    });

    socket.on('connect', () => {
      dispatch({type: ACTIONS.SERVER_CONNECTED});
      console.log('socket:connect');
    });
  };

  return ({dispatch}) => {
    return next => action => {

      if (action.type === ACTIONS.SERVER_CONNECT) {
        initializeSocket(dispatch);
      }

      if(action.socket) {
        const {event, payload: socketPayload} = action.socket;
        socket.emit(event, socketPayload);
        console.log('socket:event', event, socketPayload);
      }
      return next(action);
    };
  };
};