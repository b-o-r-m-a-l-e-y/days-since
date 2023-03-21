import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Counters from './components/Counters';

/*
 * TODO:
 * Save update state in config
 */

function App() {
  return (
    <>
    <Navbar bg="light" collapseOnSelect expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <h2>
            Developer Counters
          </h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Counters></Counters>
    </>
  );
}

export default App;
