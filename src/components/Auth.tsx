import React from "react";

import { Form, Button } from "react-bootstrap";

interface FormControlProps {
    handleSubmit(e: React.SyntheticEvent) : void;
    onChangePassword(event: React.ChangeEvent<HTMLInputElement>) : void;
}

export default class Auth extends React.Component<FormControlProps, {}> {
    render(): React.ReactNode {
        return (
        <Form className="m-2" onSubmit={this.props.handleSubmit}>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Enter password to activate Update buttons</Form.Label>
                <Form.Control onChange={this.props.onChangePassword} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Validate</Button>
        </Form>
    )}
}