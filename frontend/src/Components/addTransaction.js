import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, FormControl, ControlLabel, Form, Button } from 'react-bootstrap';

class AddTransaction extends Component {
    state = {
        open: false,
        agents: [],
        payable: "",
        expense: 0,
        borrowers: [],
        purpose: ""
    }

    validateState() {
        const pay = this.state.payable;
        const expense = this.state.expense;
        const borrowers = this.state.borrowers;
        const purpose = this.state.purpose;

        if (pay === "") return "error";
        if (expense === 0) return "error";
        if (borrowers === []) return "error";
        if (purpose === "") return "error";
    }
    componentDidMount() {
        axios.get(`/api/book/${this.props.book_name}`).then((res) => {
            this.setState(res.data)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Form inline>
                    <FormGroup controlId="payable" validationState={this.validateState()}>
                        <ControlLabel>Payable</ControlLabel>
                        <FormControl type="text" placeholder="Name" onChange={(e) => { this.setState({ payable: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup controlId="purpose" validationState={this.validateState()}>
                        <ControlLabel>purpose</ControlLabel>
                        <FormControl type="text" placeholder="Purpose" onChange={(e) => { this.setState({ purpose: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup controlId="expense" validationState={this.validateState()}>
                        <ControlLabel>expense</ControlLabel>
                        <FormControl type="number" placeholder="Expense" onChange={(e) => { this.setState({ expense: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" onClick={this.handleSubmit}>Add Transaction</Button>
                </Form>
            </div>
        )
    }
}

export default AddTransaction;