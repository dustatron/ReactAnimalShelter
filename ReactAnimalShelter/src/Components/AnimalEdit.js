import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';

function AnimalEdit(props) {
  const [ animalState, setAnimalState ] = useState({});
  const { match: { params } } = props;
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/api/${params.type}/${params.animalId}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonifiedResponse) => {
        setAnimalState(jsonifiedResponse);
      })
      .catch((error) => {
        console.log('Animal Shelter Error => ', error);
      });
  }, []);

  const idType = params.type === 'cats' ? 'catId' : 'dogId';

  const handleAnimalEdit = (e) => {
    e.preventDefault();

    let raw = JSON.stringify({
      [idType]: params.animalId,
      name: e.target.name.value,
      breed: e.target.breed.value,
      age: e.target.age.value,
      gender: e.target.gender.value
    });

    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw
    };
    fetch(`http://localhost:5000/api/${params.type}/${params.animalId}`, requestOptions)
      .then((response) => response.text())
      .then((result) => history.push(`/detail/${params.animalId}/${params.type}`))
      .catch((error) => console.log('error', error));
  };

  return (
    <div>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Header>
              <Card.Title className="text-center"> Edit Animal </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleAnimalEdit}>
                <Form.Group>
                  <Form.Control type="text" name="name" placeholder="Name" defaultValue={animalState.name} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" name="breed" placeholder="Breed" defaultValue={animalState.breed} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="number" name="age" placeholder="Age" defaultValue={animalState.age} />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" name="gender" placeholder="Gender" defaultValue={animalState.gender} />
                </Form.Group>
                <Button type="submit" className="btn-block">
                  Edit Animal
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

AnimalEdit.propTypes = {};

export default AnimalEdit;
