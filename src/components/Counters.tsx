import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterCard from './CounterCard';
import config from '../config.json'
import Auth from './Auth';

interface CountersState {
    password: string;
    isActive: boolean;
}

export default class Counters extends React.Component<{},CountersState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            password: "",
            isActive: false
        };
    }
    render() {
        return (
            <Container>
                <Row xs={1} md={1}>
                    <Col>
                    {config.counters.map(counter => (
                        <div key={counter.id}>
                        <CounterCard id={counter.id} title={counter.title}
                        lastDate={new Date(counter.lastDate)} isActive={this.state.isActive}></CounterCard>
                        </div>
                    ))}
                    </Col>
                </Row>
                <Auth handleSubmit={this.handleSubmit} onChangePassword={this.onChangePassword}></Auth>
            </Container>
        );
    }
    handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        if (this.state.password === config.password) {
            this.setState({isActive: true});
        }
    }
    onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({password: e.currentTarget.value});
    }
}