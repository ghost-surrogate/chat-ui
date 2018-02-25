import { AVATARS } from '../constants';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class User {
  constructor() {
    this.avatar = this._generateAvatar();
    this.username = '';
  }

  _generateAvatar() {
    return AVATARS[getRandomInt(0, AVATARS.length)];
  }

  static load() {
    const user = window.localStorage.getItem('user');
    return user ? JSON.parse(user) : new User();
  }

  static save(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}


export default User;