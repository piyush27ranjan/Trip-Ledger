import React, { Component } from 'react';
import axios from 'axios';
import AddTransaction from './addTransaction'

class Transaction extends Component {
    state = { transaction: [] }

    componentDidMount() {
        axios.get(`/api/transaction/${this.props.book_name}`).then((res) => {
            this.setState({ transaction: res.data })
        })
    }

    render() {
        const { transaction } = this.state
        console.log(transaction)
        const transaction_tbody = transaction.map((tran) => {
            return (
                <tr>
                    <td>{tran.payable_user}</td>
                    <td>{tran.purpose}</td>
                    <td>{tran.expense}</td>
                </tr>
            )
        })

        return (
            <div>
                <h1 class="center blue-text text-darken-2">Transactions</h1>
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
                    <AddTransaction book_name={this.props.book_name}/>
                </div>
            </div>
        )
    }

}

export default Transaction;