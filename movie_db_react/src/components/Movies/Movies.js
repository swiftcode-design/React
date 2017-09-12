import React from 'react';
import SubNav from './SubNav';
import NewReleases from './NewReleases';
import {Switch, Route } from 'react-router-dom';
import './Movie.css';
export default function Movies(props){
    return (
      <div className="" style={{minHeight: '100vh'}}>
        <SubNav />
        <div className="sub-routes-wrapper" >
          <Switch>
            <Route exact path="/movies" component={NewReleases} />
            <Route exact path="/movies/genre" component={Genre} />
          </Switch>
        </div>
      </div>
    )
}

function Genre(){
  return(
    <div className="">
      Genre
    </div>
  )
}
