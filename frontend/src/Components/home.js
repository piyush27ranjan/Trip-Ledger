import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        signup_book:"",
        signup_book_password:"",
        loggingin_book:"",
        loggingin_book_password:"",
        current_user:"",
        current_book:""
    }
    signin_book = (e) => {
        console.log("signin");
        axios.post('/api/verify_book',{
            book_name:this.state.loggingin_book,
            password:this.state.loggingin_book_password
        }).then((res) => {
            console.log(res)
            if(res.data.length !== 0){
                this.setState({current_book:res.data[0].book_name})
                this.props.get_current_book(this.state.current_book)
            }
            else{
                alert('Wrong book or password')
            }
        })

    }

    signup_book = (e) => {
        console.log("signup")
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
                    <input placeholder="Book Name" id="book_name" type="text" className="validate" onChange={(e) => {this.setState({signup_book:e.target.value})}} />
                    </div>
                    <div className="col s5">
                    <label for="password_signup">Password</label>
                    <input placeholder="Password" id="password_signup" type="text" className="validate" onChange={(e) => {this.setState({signup_book_password:e.target.value})}} />
                    </div>
                    <div className="btn-floating btn-small waves-effect waves-light red" onClick={this.signup_book}><i className="material-icons">add</i></div>
                </div>
                <div className="row">
                    <h5 className="col s6">Signin to a Book</h5>
                </div>
                <div className="row">
                    <div className="col s6">
                    <label for="book_name">Book Name</label>
                    <input placeholder="Book Name" id="book_name" type="text" className="validate" onChange={(e) => {this.setState({loggingin_book:e.target.value})}}/>
                    </div>
                    <div className="col s5">
                    <label for="password_signin">Password</label>
                    <input placeholder="Password" id="password_signin" type="text" className="validate" onChange={(e) => {this.setState({loggingin_book_password:e.target.value})}}/>
                    </div>
                    <button className="btn-floating btn-small waves-effect waves-light red" onClick={this.signin_book}><i className="material-icons">add</i></button>
                </div>
            </div>
        )
    }
}

export default Home;