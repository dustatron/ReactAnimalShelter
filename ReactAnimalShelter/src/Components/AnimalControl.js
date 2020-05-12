import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from './AnimalDetails';
import AnimalEdit from './AnimalEdit';
import AnimalList from './AnimalList';

function AnimalControl(props) {
  return (
    <React.Fragment>
      <AnimalList />
      <AnimalDetails />
      <AnimalEdit />
    </React.Fragment>
  );
}

AnimalControl.propTypes = {};

export default AnimalControl;
