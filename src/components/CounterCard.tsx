import * as React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Counter, getDaysPast, formatDate } from '../models/model.counter';

interface CounterCardState {
    lastDate: Date;
    daysPassed: number;
}

interface CounterCardProps extends Counter {
    isActive: boolean;
}

export default class CounterCard extends React.Component<CounterCardProps, CounterCardState> {
    timer: any;
    constructor (props: CounterCardProps) {
        super(props);
        this.state = {
            lastDate: props.lastDate,
            daysPassed: getDaysPast(props.lastDate),
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({daysPassed: getDaysPast(this.state.lastDate)})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div className="m-2">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Title><h3>{this.state.daysPassed} days ago</h3></Card.Title>
                        <Card.Text>
                            Last event occured {formatDate(this.state.lastDate)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button size="lg" variant="danger" onClick={this.onClickUpdate} disabled={!this.props.isActive}>
                            Update counter
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        );
    }
    onClickUpdate = () => {
        if (this.props.isActive) {
            var newDate = new Date();
            // const content = `lastDate=${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}`
            const requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded"},
                body: `lastDate=${newDate.toISOString()}`
            };
            fetch(`http://localhost:3001/update/${parseInt(this.props.id)-1}`, requestOptions)
                .then(response => {
                    if (response.ok) {
                        this.setState({
                            lastDate: newDate,
                            daysPassed: getDaysPast(newDate)
                        });
                    }
                })
                .then(error => console.log(error));
        }
    }
}