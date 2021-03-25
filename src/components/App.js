import React from 'react';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ErrorMessage from './Error.js';
import Weather from './weather.js'
import Row from 'react-bootstrap/Row';
import Movie from './movie.js';
import Map from './map.js';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      location:{},
      weatherArr: [],
      movieArr: [],
      errorMessage: '',
      searchQuery: '',
      imgSrc: '',
      displayResults: false,
      hasError: false,
      displayWeather: false,
      displayMovies: false
    }
  }

  getLocationInfo = async(e) => {
    e.preventDefault();
    try {
      const url =`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
      const location = await axios.get(url);
      const locationArray = location.data;

      const SERVER = process.env.REACT_APP_SERVER;

      const weather = await axios.get(`${SERVER}/weather`, { params: {lat: locationArray[0].lat, lon: locationArray[0].lon}});
      const weatherArr = weather.data;

      const movies = await axios.get(`${SERVER}/movies`, { params: {city: this.state.searchQuery}});
      const movieArr = movies.data;

      this.setState({
        location: locationArray[0],
        displayResults: true,
        imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=16`,
        hasError: false,
        errorMessage: '',
        displayWeather: true,
        weatherArr: weatherArr,
        movieArr: movieArr,
        displayMovies: true
      });
    } catch(err) {
      this.setState({
        errorMessage : err.message,
        hasError: true,
        displayResults: false,
        displayWeather: false,
        displayMovies: false
      })
    }
  }




  render() { 
    return (
      <Container fluid>
        <h1>City Explorer</h1>
        <form className="w-50 p3 mx-auto mb-5" onSubmit={this.getLocationInfo} >
          <input className="w-75 p3" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="city"/>
          <button className="w-25 p3" type="submit">Explore!</button>
        </form>
        <Row>
          {this.state.displayResults &&
            <Map
              searchQuery={this.state.searchQuery}
              imgSrc={this.state.imgSrc}
              display_name={this.state.location.display_name}
              lat={this.state.location.lat}
              lon={this.state.location.lon}
            />    
          }
        </Row>
        <Row className="w-50 p3 mx-auto">
          {this.state.hasError && <ErrorMessage errorMessage={this.state.errorMessage}/>}
        </Row>
        <Row className="w-75 p3 mx-auto">
          {this.state.displayWeather && <Weather weatherArr={this.state.weatherArr} />}
        </Row>
        <Row className="w-75 p3 mx-auto">
          {this.state.displayMovies &&<Movie movieArr={this.state.movieArr} />}
        </Row>
      </Container>
    )}
}

export default App;
