import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        signup_book: "",
        signup_book_password: "",
        loggingin_book: "",
        loggingin_book_password: "",
        signup_user: "",
        signup_user_password: "",
        signin_user: "",
        signin_user_password: "",
        current_user: "",
        current_book: ""
    }
    signin_book = (e) => {
        axios.post('/api/verify_book', {
            book_name: this.state.loggingin_book,
            password: this.state.loggingin_book_password
        }).then((res) => {
            console.log(res)
            if (res.data.length !== 0) {
                this.setState({ current_book: res.data[0].book_name })
                this.props.get_current_book(this.state.current_book)
            }
            else {
                alert('Wrong book or password')
            }
        })

    }

    signup_book = (e) => {
        axios.post('/api/book', {
            book_name: this.state.signup_book,
            agents: [this.state.current_user],
            password: this.state.signup_book_password
        }).then((res) => {
            console.log(res)
        })
    }

    signin_user = (e) => {
        axios.post('api/user/',{
            user_name: this.state.signin_user,
            password: this.state.signin_user_password
        }).then((res) => {
            console.log(res);
            if (res.data.length !== 0) {
                this.setState({ current_user : res.data[0].user_name })
                //this.props.get_current_book(this.state.current_book)
                console.log(this.state)
            }
            else {
                alert('Wrong User or password')
            }
        })
    }

    signup_user = (e) => {
        axios.post('/api/', {
            user_name: this.state.signup_user,
            password: this.state.signup_user_password
        }).then((res => console.log(res)))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <h5 className="col s6">Create New Book</h5>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label for="book_name">Book Name</label>
                        <input placeholder="Book Name" id="book_name" type="text" className="validate" onChange={(e) => { this.setState({ signup_book: e.target.value }) }} />
                    </div>
                    <div className="col s5">
                        <label for="password_signup">Password</label>
                        <input placeholder="Password" id="password_signup" type="text" className="validate" onChange={(e) => { this.setState({ signup_book_password: e.target.value }) }} />
                    </div>
                    <div className="btn-floating btn-small waves-effect waves-light red" onClick={this.signup_book}><i className="material-icons">add</i></div>
                </div>
                <div className="row">
                    <h5 className="col s6">Signin to a Book</h5>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label for="book_name">Book Name</label>
                        <input placeholder="Book Name" id="book_name" type="text" className="validate" onChange={(e) => { this.setState({ loggingin_book: e.target.value }) }} />
                    </div>
                    <div className="col s5">
                        <label for="password_signin">Password</label>
                        <input placeholder="Password" id="password_signin" type="text" className="validate" onChange={(e) => { this.setState({ loggingin_book_password: e.target.value }) }} />
                    </div>
                    <button className="btn-floating btn-small waves-effect waves-light red" onClick={this.signin_book}><i className="material-icons">add</i></button>
                </div>
                <div className="row">
                    <h5 className="col s6">Create New User</h5>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label for="user_signup">User Name</label>
                        <input placeholder="User Name" id="user_signup" type="text" className="validate" onChange={(e) => { this.setState({ signup_user: e.target.value }) }} />
                    </div>
                    <div className="col s5">
                        <label for="signup_user_password">Password</label>
                        <input placeholder="Password" id="signup_user_password" type="text" className="validate" onChange={(e) => { this.setState({ signup_user_password: e.target.value }) }} />
                    </div>
                    <div className="btn-floating btn-small waves-effect waves-light red" onClick={this.signup_user}><i className="material-icons">add</i></div>
                </div>
                <div className="row">
                    <h5 className="col s6">Signin User</h5>
                </div>
                <div className="row">
                    <div className="col s6">
                        <label for="signin_user">User Name</label>
                        <input placeholder="Book Name" id="signin_user" type="text" className="validate" onChange={(e) => { this.setState({ signin_user: e.target.value }) }} />
                    </div>
                    <div className="col s5">
                        <label for="signin_user_password">Password</label>
                        <input placeholder="Password" id="signin_user_password" type="text" className="validate" onChange={(e) => { this.setState({ signin_user_password: e.target.value }) }} />
                    </div>
                    <div className="btn-floating btn-small waves-effect waves-light red" onClick={this.signin_user}><i className="material-icons">add</i></div>
                </div>
            </div>

        )
    }
}

export default Home;