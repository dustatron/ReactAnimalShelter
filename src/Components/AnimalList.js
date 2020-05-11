import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SingleAnimal from './SingleAnimal';
import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';

function AnimalList(props) {
  const [ animalListState, setAnimalListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, breed, age, gender } = e.target;
    console.log('submit', name.value, breed.value, age.value, gender.value);
  };

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/Dogs/`)
        .then((response) => {
          return response.json();
        })
        .then((jsonifiedResponse) => {
          setAnimalListState(jsonifiedResponse);
        })
        .catch((error) => {
          console.log('Animal Shelter Error => ', error);
        });
      setLoadState(true);
    }
  });

  if (loadState) {
    return (
      <React.Fragment>
        <div>
          <h1> Animal List </h1>
          {animalListState.map((animal) => {
            return <p>{animal.name}</p>;
            // <SingleAnimal name={animal.name} breed={animal.breed} age={animal.age} gender={animal.gender} />;
          })}
        </div>

        {/* 
          //////////////////////////////////////////////////////////
         ////////////////////  ADD ANIMAL INPUT ///////////////////
        //////////////////////////////////////////////////////////
         */}
        <Row>
          <Col md={{ span: 6, offset: 2 }}>
            <Card>
              <Card.Header>
                <Card.Title className="text-center"> Add Animal </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Control type="text" name="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" name="breed" placeholder="Breed" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" name="age" placeholder="Age" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="text" name="gender" placeholder="Gender" />
                  </Form.Group>
                  <Button type="submit" className="btn-block">
                    Add Animal
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <Spinner animation="border" />Loading...
      </div>
    );
  }
}

AnimalList.propTypes = {};

export default AnimalList;
