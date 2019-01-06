import React, { Component } from 'react';
import axios from 'axios';

class AddTransaction extends Component {
    state = {
        agents:[]
    }
    componentDidMount() {
        axios.get(`/api/book/${this.props.book_name}`).then((res) => {
            console.log(res.data)
            this.setState(res.data)
        })
    }

    render() {
        return (
            <div>+</div>
        )
    }
}

export default AddTransaction;