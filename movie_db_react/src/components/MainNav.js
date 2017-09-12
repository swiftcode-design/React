import React from 'react';
import logo from  './../primary-green.svg';
import { NavLink } from 'react-router-dom';
import './MainNav.css';
export default function MainNav(props) {
    return (
      <div className="main-nav">
        <div className="display-flex-center">
          <div className="main-nav-div">
            <img className="nav-logo" src={logo} alt="movie db logo" />
          </div>
          <div  className="main-nav-div display-flex-center">
            <NavLink exact activeClassName="main-nav-links-active" to="/">
              <div  className="main-nav-links display-flex-center">About</div>
            </NavLink>

            <NavLink  activeClassName="main-nav-links-active" to="/movies">
              <div className="main-nav-links display-flex-center">Movies</div>
            </NavLink>
          </div>
        </div>
      </div>
    );
}
