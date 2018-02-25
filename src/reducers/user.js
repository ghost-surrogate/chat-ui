import { ACTIONS } from '../constants';
import User from '../services/user';

const initialState = User.load();

export default function messages(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.USER_CHANGE:
      return {
        ...state,
        ...action.user
      }

    default:
      return state;
  }
}