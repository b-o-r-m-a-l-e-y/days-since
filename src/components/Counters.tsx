import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterCard from './CounterCard';
import Auth from './Auth';
import { Counter } from '../models/model.counter';

interface Cfg {
    password: string;
    counters: Counter[];
}

interface CountersState {
    password: string;
    isActive: boolean;
    cfg: Cfg;
    error: null;
}

export default class Counters extends React.Component<{},CountersState> {
    constructor (props: {}) {
        super(props);
        this.state = {
            password: "",
            isActive: false,
            error: null,
            cfg: {
              password: "",
              counters: []
            }
        };
    }
    getConfig = () => {
      fetch("http://localhost:3001/config")
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            cfg: {
              password: result.password,
              counters: result.counters
            }
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
    }
    componentDidMount(): void {
      this.getConfig();
    }
    render() {
        return (
            <Container>
                <Row xs={1} md={1}>
                    <Col>
                    {this.state.cfg.counters.map(counter => (
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
        if (this.state.password === this.state.cfg.password) {
            this.setState({isActive: true});
        }
    }
    onChangePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({password: e.currentTarget.value});
    }
}