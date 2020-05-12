import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SingleAnimal from './SingleAnimal';
// import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { v4 } from 'uuid';

function AnimalList(props) {
  const [ animalListState, setAnimalListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, breed, age, gender } = e.target;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("headers here.", myHeaders);
    
    let raw = JSON.stringify({"catId":35,"name":"bambie","breed":"cat","age":12,"gender":"girl"});
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    
  fetch("http://localhost:5000/api/cats", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  };

  useEffect(() => {
    if (!loadState) {
      fetch(`http://localhost:5000/api/Cats`)
        .then((response) => {
          return response.json();
        })
        .then((jsonifiedResponse) => {
          setAnimalListState(jsonifiedResponse);
          setLoadState(true);
        })
        .catch((error) => {
          console.log('Animal Shelter Error => ', error);
        });
    }
  });

  if (loadState) {
    return (
      <React.Fragment>
        <div>
          <h1> Animal List </h1>
          {animalListState.map((animal) => {
            return <p key={v4()}>{animal.name}</p>;
            // <SingleAnimal name={animal.name} breed={animal.breed} age={animal.age} gender={animal.gender} />;
          })}
        </div>

        {/* 
          //////////////////////////////////////////////////////////
         ////////////////////  ADD ANIMAL INPUT ///////////////////
        //////////////////////////////////////////////////////////
         */}

         <form onSubmit={handleSubmit}>
           <button type='submit'> submit </button>
          </form>
        {/* <Row>
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
        </Row> */}
      </React.Fragment>
    )
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }
}

AnimalList.propTypes = {};

export default AnimalList;
