import React from 'react';
import PropTypes from 'prop-types';

function AnimalDetails(props) {
  const { match: { params } } = props;
  return (
    <div>
      <h1> Animal Details </h1>
      <p> {params.animalId} </p>
    </div>
  );
}

AnimalDetails.propTypes = {};

export default AnimalDetails;
