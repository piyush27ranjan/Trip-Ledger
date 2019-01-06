import React, { Component } from 'react';
import axios from 'axios';

class Transaction extends Component {
    state = {transaction:[]}

    componentDidMount() {
        axios.get(`/api/transaction/${this.props.book_name}`).then((res) => {
            this.setState({transaction:res.data})
        })
    }

    render() {
        const {transaction} = this.state
        console.log(transaction)
        const transaction_tbody = transaction.map((tran) => {
            console.log(tran)
            return(
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
                <span>
                    <table className="highlight">
                        <thead>
                            <tr>
                                <td>Payable User</td>
                                <td>Purpose</td>
                                <td>expense</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction_tbody}
                        </tbody>
                    </table>
                </span>
            </div>
        )
    }

}

export default Transaction;