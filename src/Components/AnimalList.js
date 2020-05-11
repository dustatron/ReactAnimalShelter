import React from 'react';
import PropTypes from 'prop-types';
import SingleAnimal from './SingleAnimal';

function AnimalList(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, breed, age, gender } = e.target;
    console.log('submit', name.value, breed.value, age.value, gender.value);
  };
  return (
    <React.Fragment>
      <div>
        <h1> Animal List </h1>
        <SingleAnimal />
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="breed" placeholder="Breed" />
        <input type="text" name="age" placeholder="Age" />
        <input type="text" name="gender" placeholder="Gender" />
        <button type="submit">Add Animal</button>
      </form>
    </React.Fragment>
  );
}

AnimalList.propTypes = {};

export default AnimalList;
