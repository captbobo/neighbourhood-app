import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_API_KEY)
    return (
      <div className="App">
        <header>Bostanli Area Restaurants</header>

        <footer>created by Can Sürmeli</footer>
      </div>
    );
  }
}

export default App;
