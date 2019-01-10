import React, { Component } from 'react';
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated'

class AddTransaction extends Component {
    state = {
        open: false,
        agents: [],
        payable: "",
        expense: 0,
        borrowers: [],
        purpose: "",
        "book_name": this.props.book_name
    }
    options = []
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
            var options = [];
            console.log(res.data.agents)
            for (let x in res.data.agents) {
                options = [...options, { "value": res.data.agents[x], "label": res.data.agents[x] }]
            }
            this.options = options;
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        axios.post('/api/transaction',{
            "book_name": this.state.book_name,
            "payable_user": this.state.payable,
            "expense": this.state.expense,
            "borrowers": this.state.borrowers,
            "purpose": this.state.purpose
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                <Select
                        className="col s6"
                        closeMenuOnSelect={false}
                        options={this.options}
                        onChange={(op) => { this.setState({ "payable": op.map((a) => a.value) }) }}
                        components={makeAnimated()}
                        isMulti
                    />
                    <div className="input-field col s6">
                        <input placeholder="Name" id="first_name" type="number" class="validate" onChange={(e) => this.setState({ "expense": e.target.value })} />
                        <label for="first_name">Expense</label>
                    </div>
                    <div className="input-field col s12">
                        <input placeholder="Name" id="first_name" type="text" class="validate" onChange={(e) => this.setState({ "purpose": e.target.value })} />
                        <label for="first_name">Purpose</label>
                    </div>

                    <Select
                        className="col s9"
                        closeMenuOnSelect={false}
                        options={this.options}
                        onChange={(op) => { this.setState({ "borrowers": op.map((a) => a.value) }) }}
                        components={makeAnimated()}
                        isMulti
                    />
                    <button className="waves-effect waves-light btn col s3" onClick={this.handleSubmit}>button</button>
                </div>
            </div>
        )
    }
}

export default AddTransaction;