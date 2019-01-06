import React, { Component } from 'react';
import Transaction from './Components/transaction'
import { Route, BrowserRouter } from 'react-router-dom'
import Stats from './Components/stats';
import Home from './Components/home';
import Navbar from './Components/navbar'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/transaction' render={(props) => <Transaction {...props} book_name="Goa Trip" />} />
          <Route path='/stats' component={Stats} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
