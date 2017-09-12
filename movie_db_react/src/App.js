import React, { Component } from 'react';
import MainNav from './components/MainNav';
import About from './components/About';
import Movies from './components/Movies/Movies';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Wrapper(props){
  return (
    <div>
      <MainNav  />
      <div className="main-routes">
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/movies" component={Movies} />
        </Switch>
      </div>
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path="/" component={Wrapper} />
        </Router>
      </div>
    );
  }
}

export default App;
