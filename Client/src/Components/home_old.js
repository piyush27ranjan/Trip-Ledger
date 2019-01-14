import React, { Component } from 'react';
//import axios from 'axios';

class Home extends Component {
    state = {
        create_book: false,
        login_book: false
    }
    render() {

        const create = this.state.create_book ? (<div>
            <button className="btn-floating btn-small waves-effect waves-light red" onClick={() => this.setState({ create_book: !this.state.create_book })}><i className="material-icons">close</i></button>
        </div>) : (<button className="btn-floating btn-small waves-effect waves-light red" onClick={() => this.setState({ create_book: !this.state.create_book })}><i className="material-icons">add</i></button>)
        return (
            <div>
                <div className="row">
                <h5 className="col s9">Create book </h5><div className="col s3">{create}</div>
                </div>
            </div>
        )
    }
}

export default Home;