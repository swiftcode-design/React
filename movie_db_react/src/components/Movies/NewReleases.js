import React, { Component } from 'react';

import  { Card, Image, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class NewReleases extends Component{
  constructor(props){
    super(props);
    this.state = {
      newReleases: []
    }
  }
  componentDidMount(){
    axios.get('http://api.themoviedb.org/3/discover/movie?primary_release_year=2017&api_key=5c7131bf729da8105e48fe7b685bf91c')
    .then((newReleases, idx) => (
      this.setState({newReleases: newReleases.data.results})
    ))
  }
  render(){
    console.log(window.innerHeight)
    console.log(this.state.newReleases)
    return (
      <div className="new-releases display-flex-wrap">
        {this.state.newReleases.length ?
            this.state.newReleases.map((movie, idx) => (
              <MovieCard
                genreId={movie.genre_id}
                title={movie.title}
                movieId={movie.id}
                release={movie.release_date}
                poster={movie.poster_path} key={idx} />
            ))
          :
          <div>Loading</div>
        }
      </div>
    )
  }
}

function MovieCard(props){
  return (
    <div className="movie-card">
      <Card>
        <Image  src={`http://image.tmdb.org/t/p/w500${props.poster}`} />
        <Card.Content>
          <Card.Header style={{height: '70px'}}>
            {props.title}
          </Card.Header>
          <Card.Meta>{props.release}</Card.Meta>
          <Card.Content>
            view details
            <Icon name="arrow right" />
          </Card.Content>
          <Card.Content>
            view details
            <Icon name="arrow right" />
          </Card.Content>

        </Card.Content>
      </Card>
      {/* <img className="movie-card-img" /> */}
    </div>
  )
}
