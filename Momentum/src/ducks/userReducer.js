import axios from 'axios';
import quotes from './../Utils/quotes.js';
const HANDLE_CHANGE_NAME = 'HANDLE_CHANGE_NAME'
, HANDLE_CHANGE_FOCUS = 'HANDLE_CHANGE_FOCUS'
, HANDLE_SUBMIT_LOGIN = 'HANDLE_SUBMIT_LOGIN'
, HANDLE_SUBMIT_FOCUS = 'HANDLE_SUBMIT_FOCUS'
, CHECK_USER = 'CHECK_USER'
, REMOVE_FOCUS = 'REMOVE_FOCUS'
, initialState = {
  name: '',
  user: false,
  quotes: quotes,
  focus: '',
  focusSet: false
};

export function user(state = initialState, action) {
  switch (action.type) {
    case HANDLE_CHANGE_NAME:
      return Object.assign({}, state, {name: action.payload})
    case HANDLE_CHANGE_FOCUS:
      return Object.assign({}, state, {focus: action.payload})
    case HANDLE_SUBMIT_FOCUS:
      localStorage.setItem('m-focus', state.focus)
      return Object.assign({}, state, {focusSet: true})
    case HANDLE_SUBMIT_LOGIN:
    localStorage.setItem('m-username', state.name)
      return Object.assign({}, state, {user: true});
    case CHECK_USER:
      return Object.assign({}, state, {
        user:action.payload.user
        , name:action.payload.name
        , focusSet: action.payload.focusSet
        , focus: action.payload.focus
      })
    case REMOVE_FOCUS:
      localStorage.removeItem('m-focus')
      return Object.assign({}, state, {focusSet: false, focus: ''})
    default:
      return state
  }
}

export function checkUser(){
  const user = localStorage.getItem('m-username');
  const focus = localStorage.getItem('m-focus');
  return{
    type: CHECK_USER,
    payload: {
      user:!user ? false : true,
      name: !user ? '' : user,
      focusSet: !focus ? false : true,
      focus: !focus ? '' : focus
    }
  }
}

export function handleSubmit(e){
  e.preventDefault();
  return{
    type: 'HANDLE_SUBMIT_' + e.target.name.toUpperCase(),
    payload: 'none'
  }
}
export function handleLoginSubmit(e){
  return {
    type: 'HANDLE_SUBMIT_LOGIN'
  }
}
export function handleChange(e){
  return {
    type: 'HANDLE_CHANGE_' + e.target.name.toUpperCase(),
    payload: e.target.value
  }
}

export function removeFocus(){
  return {
    type: REMOVE_FOCUS
  }
}
