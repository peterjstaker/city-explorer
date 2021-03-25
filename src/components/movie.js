import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDay from './movieDay';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {

  render() {
    return(
      <>
        <Row>
          <h1>Movies</h1>
        </Row>
        <Row>
          {this.props.movieArr.map((movieObj, index) => (
            movieObj.poster_path &&
            <MovieDay 
              key={index}
              index={index}
              release_date={movieObj.release_date}
              overview={movieObj.overview}
              title={movieObj.title}
              rating={movieObj.rating}
              poster_path={movieObj.poster_path}
            />
          ))}
        </Row>
      </>
    )
  };
  
}

export default Movie;