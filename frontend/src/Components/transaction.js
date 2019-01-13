import React, { Component } from 'react';
import axios from 'axios';
import AddTransaction from './addTransaction'

class Transaction extends Component {
    state = {
        transaction: [],
        open: false,
        current_book:""
    }

    componentDidMount() {
        axios.get(`/api/transaction/${this.props.book_name}`).then((res) => {
            this.setState({ transaction: res.data, current_book: this.props.book_name })
        })
    }

    
    render() {
        const addTran = this.state.open ? (<div>
        <button className="btn-floating btn-small waves-effect waves-light red" onClick={() => this.setState({open:!this.state.open})}><i className="material-icons">close</i></button>
        <AddTransaction book_name={this.state.current_book} /></div>) : (<button className="btn-floating btn-small waves-effect waves-light red" onClick={() => this.setState({open:!this.state.open})}><i className="material-icons">add</i></button>)
        const { transaction } = this.state
        console.log(this.state)
        const transaction_tbody = transaction.map((tran) => {
            return (
                <tr>
                    <td>{tran.payable_user}</td>
                    <td>{tran.purpose}</td>
                    <td>{tran.expense}</td>
                </tr>
            )
        })
        const head_tran = this.state.current_book ? (
            <div>
                <h1 className="center blue-text text-darken-2">Transactions</h1>
                <div className="container">
                    <table className="highlight">
                        <thead>
                            <tr>
                                <td className="blue-text">Payable User</td>
                                <td className="blue-text">Purpose</td>
                                <td className="blue-text">expense</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction_tbody}
                        </tbody>
                    </table>
                    <br/>
                    {addTran} 
                </div>
            </div>
        ) : (
            <div>
                <h4 className="center blue-text">Signin to a Book</h4>
            </div>
        )
        return (
            <div>
                {head_tran}
            </div>
        )
    }

}

export default Transaction;