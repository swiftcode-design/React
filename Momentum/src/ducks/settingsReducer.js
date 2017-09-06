import backgrounds from './../Utils/backgrounds.js';
const initialState = {
  backgrounds: backgrounds,
  backgroundPos: 0,
  show: false
}
, SHOW_SETTINGS = 'SHOW_SETTINGS'
, CHANGE_BACKGROUND = 'CHANGE_BACKGROUND';


export function settings(state = initialState, action){
  switch (action.type) {
    case SHOW_SETTINGS:
      return Object.assign({}, state, {show: !state.show})
    case CHANGE_BACKGROUND:
      return Object.assign({}, state, {backgroundPos: action.payload})
    default:
      return state

  }
}

export function showSettings(){
  return {
    type: SHOW_SETTINGS
  }
}

export function changeBackground(idx){
  return{
    type: CHANGE_BACKGROUND,
    payload: idx
  }
}
