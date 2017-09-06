import quotesArr from './../Utils/quotes';
import axios from 'axios';
import moment from 'moment';
const WEATHER_FETCHED = 'WEATHER_FETCHED'
, initialState = {
  quotes: quotesArr,
  quotesNum: Math.floor(Math.random() * 94),
  city: '',
  icon_url: '',
  temp_c: '',
  temp_f: ''
}
export function api(state = initialState, action){
  switch(action.type){
    case WEATHER_FETCHED:
      return Object.assign({}, state, {...action.payload})
    default:
      return state;
  }
}

export function fetchWeather(){
  return dispatch => {
    dispatch({type: 'LOADING_WEATHER'})
    axios.get('http://freegeoip.net/json/')
    .then(ipRes => {
      const weatherData = localStorage.getItem('m-weatherData');
      const previousTime = localStorage.getItem('m-previousTime') || Number(moment().format('hh:mm').split(':')[1])+10;
      const time = moment().format('hh:mm').split(':')[1];
      const timeDifference = (time - previousTime);
      
      if(timeDifference >= 10 || timeDifference <= -10){
        console.log('opps')
        axios.get(`http://api.wunderground.com/api/6f0701085de5295d/conditions/q/${ipRes.data.region_code}/${ipRes.data.city}.json`)
        .then(weatherRes => {
          const weather = {
            city: ipRes.data.city,
            temp_c: weatherRes.data.current_observation.temp_c,
            temp_f: weatherRes.data.current_observation.temp_f,
            icon_url: weatherRes.data.current_observation.icon_url
          }
          localStorage.setItem('m-weatherData', JSON.stringify(weather))
          localStorage.setItem('m-previousTime', moment().format('h:mm').split(':')[1])
          dispatch({
            type: 'WEATHER_FETCHED',
            payload: weather
          })
        })
      } else {
        dispatch({type: 'WEATHER_FETCHED',payload: JSON.parse(weatherData)})
      }
    })
  }
}
