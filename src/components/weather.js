import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './weatherDay';
import Row from 'react-bootstrap/Row';

class Weather extends React.Component {

    render() {
        return(
          <>
          <Row>
            <h1>Weather</h1>
          </Row>
          <Row>
            {this.props.weatherArr.map((forecastObj, index) => (
              <WeatherDay 
                key={index}
                index={index}
                date={forecastObj.date}
                description={forecastObj.description}
              />
            ))}
          </Row>
          </>
    )};

}

export default Weather;