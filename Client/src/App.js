import React, { Component } from 'react';
import Transaction from './Components/transaction'
import { Route, BrowserRouter } from 'react-router-dom'
import Stats from './Components/stats';
import Home from './Components/home';
import Navbar from './Components/navbar'

class App extends Component {

  state ={
    current_user:"",
    current_book:""
  }

  get_current_book = (current_book) => {
    this.setState({current_book:current_book})
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' render={(props) => <Home {...props} get_current_book={this.get_current_book} />} />
          <Route path='/transaction' render={(props) => <Transaction {...props} book_name={this.state.current_book} />} />
          <Route path='/stats' component={Stats} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
