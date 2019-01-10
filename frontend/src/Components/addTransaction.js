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
        purpose: ""
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
            var options=[];
            console.log(res.data.agents)
            for(let x in res.data.agents){
                options = [...options,{"value":res.data.agents[x],"label": res.data.agents[x]}]
            }
            this.options = options;
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <Select
                    closeMenuOnSelect={false}
                    options={this.options}
                    onChange={(op) => {this.setState({"borrowers":op.map((a) => a.value)})}}
                    components={makeAnimated()}
                    isMulti
                />
                <button class="waves-effect waves-light btn" onClick={this.handleSubmit}>button</button>
            </div>
        )
    }
}

export default AddTransaction;