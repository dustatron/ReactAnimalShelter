import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Button.css';
import { Card, Row, Col } from 'react-bootstrap';

function AnimalDetails(props) {
  const { match: { params } } = props;
  const [ loadedState, setLoadedState ] = useState(false);
  const [ animalState, setAnimalState ] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/${params.type}/${params.animalId}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setAnimalState(jsonifiedResponse);
        setLoadedState(true);
      })
      .catch((error) => {
        console.log('Animal Shelter Error => ', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center"> Animal Details </Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col sm={6}>
                  <p> ID Number: {params.animalId} </p>
                  <p> Name: {animalState.name}</p>
                  <p> Breed: {animalState.breed}</p>
                  <p> Age: {animalState.age}</p>
                  <p> Gender: {animalState.gender}</p>
                </Col>
                <Col sm={6}>
                  <Card.Img
                    src={`https://source.unsplash.com/200x200/?${params.type === 'cats' ? 'cat' : 'dog'}`}
                    style={{ width: '90%' }}
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="text-center">
              <Link to={{ pathname: `/edit/${params.animalId}/${params.type}` }}>
                <button className="button">Edit</button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AnimalDetails;
