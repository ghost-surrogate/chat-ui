import { ACTIONS } from '../constants';
import User from '../services/user';

export function changeUserName(username) {
  return (dispatch, getState) => {
    const user = getState().user;
    const updatedUser = { ...user, username };
    dispatch({ type: ACTIONS.USER_CHANGE, user: updatedUser });
    User.save(updatedUser);
  };
}