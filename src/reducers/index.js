import { combineReducers } from 'redux'
import { default as messages } from './messages';
import { default as user } from './user';
 
export default combineReducers({
  user,
  messages
})