import axios from 'axios';
const HANDLE_EMAIL_CHANGE = 'HANDLE_EMAIL_CHANGE';
const HANDLE_PASSWORD_CHANGE = 'HANDLE_PASSWORD_CHANGE';
const initialState = {
  email: '',
  password: '',
  user: null
};

export  function auth(state = initialState, action) {
  switch (action.type) {
    case HANDLE_EMAIL_CHANGE:
      return Object.assign({}, state, {email: action.payload})
    case HANDLE_PASSWORD_CHANGE:
      return Object.assign({}, state, {password: action.payload})
    default:
      return state
  }
}
