import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from './AnimalDetails';
import AnimalEdit from './AnimalEdit';
import AnimalList from './AnimalList';
import AddAnimal from './AddAnimal';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Header from './Header';

function AnimalControl(props) {
  return (
    <Router>
      <Header />
      <Route path="/list/:type" component={AnimalList} />
      <Route path="/detail/:animalId" component={AnimalDetails} />
      <Route path="/edit/:animalId" component={AnimalEdit} />
      <Route path="/add" component={AddAnimal} />
    </Router>
  );
}

AnimalControl.propTypes = {};

export default AnimalControl;
