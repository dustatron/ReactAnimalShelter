import React from 'react';
import PropTypes from 'prop-types';
import SingleAnimal from './SingleAnimal';

function AnimalList(props) {
  return (
    <div>
      <h1> Animal List </h1>
      <SingleAnimal />
    </div>
  );
}

AnimalList.propTypes = {};

export default AnimalList;
