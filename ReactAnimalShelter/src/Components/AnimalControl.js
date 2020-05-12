import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from './AnimalDetails';
import AnimalEdit from './AnimalEdit';
import AnimalList from './AnimalList';
import AddAnimal from './AddAnimal';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import Header from './Header';

function AnimalControl(props) {
  const [ animal, setAnimal ] = useState('Dogs');

  return (
    <Router>
      <Header onAnimalClick={setAnimal} />
      <Route
        exact
        path="/list/:type"
        component={() => {
          return <AnimalList showAnimal={animal} />;
        }}
      />
      <Route path="/detail/:animalId/:type" component={AnimalDetails} />
      <Route path="/edit/:animalId" component={AnimalEdit} />
      <Route path="/add" component={AddAnimal} />
    </Router>
  );
}

AnimalControl.propTypes = {};

export default AnimalControl;
