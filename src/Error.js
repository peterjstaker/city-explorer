import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class ErrorMessage extends React.Component {
  
    render() {
        return(
            <>
            <Card className="w-50 p3 mx-auto mb-5" bg="dark" text="light">
              <Card.Body>
                <Card.Title>Oops! Something went wrong...</Card.Title>
                <Card.Text>
                    {this.props.errorMessage}
                </Card.Text>
              </Card.Body>
            </Card>
            </>
        )}

}

export default ErrorMessage;