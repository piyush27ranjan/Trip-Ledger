import React, { Component } from 'react';
import Transaction from './Components/transaction'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Transaction book_name="Goa Trip" />
      </div>
    );
  }
}

export default App;
