import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Dash from './components/Dash';
import { handleChange, handleSubmit, handleLoginSubmit, checkUser, removeFocus } from './ducks/userReducer';
import { showSettings, changeBackground } from './ducks/settingsReducer';
import { fetchWeather } from './ducks/apiReducer';
import './App.css';
class App extends Component {
  componentWillMount(){
    this.props.checkUser();
  }
  componentDidMount(){
    this.props.fetchWeather();
  }
  render() {
    console.log()
    return (
      <div className="App center" style={{backgroundImage: `url(${this.props.settings.backgrounds[this.props.settings.backgroundPos].url})`}}>
        {this.props.user.user ?
           <Dash
             state={this.props} />
             :
             <Login
               state={this.props}/>}
      </div>
    );
  }
}

export default connect((state) => {
  return{
    ...state
  }
}, { handleChange, handleSubmit, handleLoginSubmit, checkUser, removeFocus, fetchWeather, showSettings, changeBackground })(App);
