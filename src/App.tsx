import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import config from './config.json'
import CounterCard from './components/CounterCard';
import Counters from './components/Counters';

/*
 * TODO:
 * 1. Update component each second
 * 2. Modal window ask password when update
 * 3. Save update state in config
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
