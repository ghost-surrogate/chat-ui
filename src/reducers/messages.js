import { ACTIONS, MESSAGE_STATUS } from '../constants';

const initialState = {
  items: {}
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.MESSAGE_SEND:
      return {
        ...state,
        items: { 
          ...state.items,
          [action.message.id]: { ...action.message, status: MESSAGE_STATUS.SENDING }
      }};

    case ACTIONS.MESSAGE_FAILED: {
      const msg = state.items[action.messageId];
      return {
        ...state,
        items: {
          ...state.items,
          [action.messageId]: { ...msg, status: MESSAGE_STATUS.FAILED }
      }};
    }

    case ACTIONS.MESSAGE_RECEIVED: {
      const msgId = action.message.id;
      const updatedMsg = {...action.message, status: state.items[msgId] ? MESSAGE_STATUS.SENT : MESSAGE_STATUS.RECEIVED};
      return {
        ...state,
        items: {
          ...state.items,
          [msgId]: updatedMsg
      }};
    }

    default:
      return state;
  }
}