import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button } from 'react-bootstrap';
import './Button.css';
import { Link } from 'react-router-dom';

function SingleAnimal(props) {
  const animalStyle = {
    width: '40%',
    margin: '15px'
  };

  const buttonStyle = {
    margin: '5px'
  };

  return (
    <Card style={animalStyle}>
      <Card.Header className="text-center" as="h5">
        {props.name}
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={6}>
            <p>Breed: {props.breed} </p>
            <p>Age: {props.age} </p>
            <p>Gender: {props.gender} </p>
          </Col>
          <Col sm={6}>
            <Card.Img src={props.link} style={{ width: '90%' }} />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div className="wrap">
          <button style={buttonStyle} className="button" onClick={() => props.onAnimalAdoption(props.id)}>
            Adopt
          </button>
          <Link to={`/detail/${props.id}/${props.type}`}>
            <button style={buttonStyle} className="button">
              Details
            </button>
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
}

SingleAnimal.propTypes = {
  name: PropTypes.string,
  breed: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  id: PropTypes.number,
  link: PropTypes.string,
  onAnimalAdoption: PropTypes.func
};

export default SingleAnimal;
