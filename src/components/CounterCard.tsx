import * as React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { Counter, getDaysPast, formatDate } from '../models/model.counter';

interface CounterCardState {
    lastDate: Date;
    daysPassed: number;
}

interface CounterCardProps extends Counter {
    isActive: boolean;
}

export default class CounterCard extends React.Component<CounterCardProps, CounterCardState> {
    constructor (props: CounterCardProps) {
        super(props);
        this.state = {
            lastDate: props.lastDate,
            daysPassed: getDaysPast(props.lastDate),
        };
    }
    render() {
        return (
            <div className="m-2">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>
                            <h3>{this.state.daysPassed} days ago</h3>
                            Last event occured {formatDate(this.state.lastDate)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button size="lg" variant="danger" onClick={this.updateCounter} disabled={!this.props.isActive}>
                            Update counter
                        </Button>
                    </Card.Footer>
                    <Modal isShown={true}> hide={false}</Modal>
                </Card>
            </div>
        );
    }
    updateCounter = () => {
        if (this.props.isActive) {
            var newDate = new Date();
            this.setState({
                lastDate: newDate,
                daysPassed: getDaysPast(newDate)
            });
        }
    }
}