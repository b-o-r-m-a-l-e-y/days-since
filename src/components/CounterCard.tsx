import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Counter, getEventOccured, updateCounterModel, getDaysPast } from '../models/model.counter';

interface CounterCardProps {
    counter: Counter;
}

interface CounterCardState {
    lastDate: Date;
    daysPassed: number;
}

export default class CounterCard extends React.Component<CounterCardProps, CounterCardState> {
    constructor (props: CounterCardProps) {
        super(props);
        this.state = {
            lastDate: props.counter.lastDate,
            daysPassed: getDaysPast(props.counter)
        };
    }
    render() {
        return (
            <div className="m-2">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>{this.props.counter.title}</Card.Title>
                        <Card.Text>
                            <h2>{this.state.daysPassed} days ago</h2>
                            Last event occured {getEventOccured(this.props.counter)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button size="lg" variant="danger" onClick={this.updateCounter}>
                            Update counter
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
    updateCounter = () => {
        // this.state.daysPast = 5;
        updateCounterModel(this.props.counter);
        this.setState({
            lastDate: this.props.counter.lastDate,
            daysPassed: getDaysPast(this.props.counter)
        });
    }
}