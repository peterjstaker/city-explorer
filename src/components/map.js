import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Map extends React.Component {

    render() {
        return(
          <Card className="w-50 p3 mx-auto mb-5" bg="dark" text="light">
            <Card.Img variant="top" alt={this.props.searchQuery} src={this.props.imgSrc} />
            <Card.Body>
              <Card.Title>{this.props.display_name}</Card.Title>
              <Card.Text>
                {`Latitude: ${this.props.lat}`}
              </Card.Text>
              <Card.Text>
                {`Longitude: ${this.props.lon}`}
              </Card.Text>
            </Card.Body>
          </Card>
    )};

}

export default Map;