import React from 'react';
import { NavLink } from 'react-router-dom';


export default function SubNav(){

  return(
    <div style={{background: '#081c24'}} className="movies-sub-nav display-flex-center">
      <div >
        {/* {position: 'fixed', background: '#081c24', width: '100%'} */}
        <div className="display-flex-center" >
            <NavLink exact activeClassName="main-nav-links-active" to='/movies'>
              <div className="main-nav-links display-flex-center">New</div>
            </NavLink>

            <NavLink activeClassName="main-nav-links-active" to="/movies/genre">
              <div className="main-nav-links display-flex-center">Genre</div>
            </NavLink>
        </div>
      </div>

    </div>
  )
}
