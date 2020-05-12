import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SingleAnimal from './SingleAnimal';
import { Row, Col, Form, Button, Card, Spinner } from 'react-bootstrap';
import { v4 } from 'uuid';

function AnimalList(props) {
  const [ animalListState, setAnimalListState ] = useState([]);
  const [ loadState, setLoadState ] = useState(false);

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

  const handleAnimalAdoption = (id) => {
    fetch(`http://localhost:5000/api/Cats/${id}`, { method: 'DELETE' })
      .then((response) => console.log('DELETE', response))
      .then((jsonifiedResponse) => {
        setLoadState(false);
      });
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  };

  if (loadState) {
    return (
      <React.Fragment>
        <h1 className="text-center"> Animal List </h1>
        <div style={listStyle}>
          {animalListState.map((animal) => {
            // return <p key={v4()}>{animal.name}</p>;
            return (
              <SingleAnimal
                name={animal.name}
                breed={animal.breed}
                age={animal.age}
                gender={animal.gender}
                id={animal.catId}
                link={'https://source.unsplash.com/200x200/?cat'}
                onAnimalAdoption={handleAnimalAdoption}
                key={animal.catId}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
}

AnimalList.propTypes = {};

export default AnimalList;
