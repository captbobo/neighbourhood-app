import React, { Component } from 'react';
import Map from './MapContainer'
import List from './List'
import { Geocoder } from "react-google-maps"

import './App.css'


class App extends Component {
  state = {
    center: { lat: 38.4652132,
              lng: 27.1030014 }
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Bostanli Area Restaurants</h1>
        </header>
        <div className="App">
          <List />
          <Map center={this.state.center}/>
        </div>
        <footer>created by Can Sürmeli</footer>
      </div>
    );
  }
}

export default App;
