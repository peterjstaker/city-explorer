import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Movie extends React.Component {

    render() {
        return(
          <Card className="mx-auto mb-5 overflow-auto" style={{ width: '20rem', height: '28rem'}} bg="dark" text="light">
            <Card.Img variant="top" alt={this.props.title} src={`https://www.themoviedb.org/t/p/original${this.props.poster_path}`} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>   
              <Row>
                  {`Release Date: ${this.props.release_date}`}     
                </Row>
                <Row>
                  {`Rating: ${this.props.rating}`}
                </Row>  
                <Row>
                {`Overview: ${this.props.overview}`}   
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
    )};

}

export default Movie;