import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {

    render() {
        return(
            <Card className="mx-auto mb-5" style={{ width: '10rem' }} bg="dark" text="light">
            <Card.Body>
              <Card.Title>{this.props.date}</Card.Title>
              <Card.Text>
                {this.props.description}
              </Card.Text>
            </Card.Body>
          </Card>
    )};

}

export default Weather;