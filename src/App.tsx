import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Counter } from './models/model.counter';
import * as data from './config.json'
import CounterCard from './components/CounterCard';


const counters : Counter[]  = [
  {
    id: '1',
    title: 'Last memory leakage',
    lastDate: new Date('2022-03-03'),
  },
  {
    id: '2',
    title: 'Last axes mixup',
    lastDate: new Date('2023-02-03'),
  },
]

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
    <Container>
      <Row xs={1} md={1}>
        <Col>
          {counters.map(counter => (
            <div key={counter.id}>
              <CounterCard counter={counter}></CounterCard>
            </div>
          ))}
          {/* <CounterCard counter={test_ctr}></CounterCard> */}
          {/* <CounterCard counter={test_ctr}></CounterCard> */}
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
