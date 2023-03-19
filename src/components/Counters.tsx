import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterCard from './CounterCard';
import config from '../config.json'

export default class Counters extends React.Component {
    render() {
        return (
            <Container>
                <Row xs={1} md={1}>
                    <Col>
                    {config.counters.map(counter => (
                        <div key={counter.id}>
                        <CounterCard id={counter.id} title={counter.title} lastDate={new Date(counter.lastDate)}></CounterCard>
                        </div>
                    ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}