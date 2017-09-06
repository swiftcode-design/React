import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducers from './ducks/reducers';
import './index.css';
import App from './App';

const rootReducer = combineReducers(reducers)
, middleware = applyMiddleware(thunk)
, store = createStore(rootReducer, middleware)



ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
