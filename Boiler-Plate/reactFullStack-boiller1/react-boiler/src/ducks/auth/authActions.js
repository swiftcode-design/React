import axios from 'axios';

export function handlePasswordChange(payload) {
  return {type: 'HANDLE_PASSWORD_CHANGE', payload};
}
export function handleEmailChange(payload) {
  return {type: 'HANDLE_EMAIL_CHANGE', payload};
}
