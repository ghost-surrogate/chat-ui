import { ACTIONS } from '../constants';

export function connect() {
  return { type: ACTIONS.SERVER_CONNECT };
}