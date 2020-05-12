import React from 'react';
import './App.css';
import AnimalControl from './Components/AnimalControl';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Container>
        <AnimalControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
