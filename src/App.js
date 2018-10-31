import React, { Component } from 'react';
import './App.css';
import Pads from './components/pads'
import Audio from './components/audio'

class App extends Component {

  state={
      pads: [
      { key: 1, datakey: 49, name: '1' },
      { key: 2, datakey: 50, name: '2' },
      { key: 3, datakey: 51, name: '3' },
      { key: 4, datakey: 52, name: '4' },
      { key: 5, datakey: 81, name: 'Q' },
      { key: 6, datakey: 87, name: 'W' },
      { key: 7, datakey: 69, name: 'E' },
      { key: 8, datakey: 82, name: 'R' },
      { key: 9, datakey: 65, name: 'A' },
      { key: 10, datakey: 83, name: 'S' },
      { key: 11, datakey: 68, name: 'D' },
      { key: 12, datakey: 70, name: 'F' },
      { key: 13, datakey: 90, name: 'Z' },
      { key: 14, datakey: 88, name: 'X' },
      { key: 15, datakey: 67, name: 'C' },
      { key: 16, datakey: 86, name: 'V' }

    ]
  }

  render() {
    return (
      <div className="App">
        <h1>
          MPC 
        </h1>
        <h2>{this.state.currentKeys}</h2>
        <Pads 
          pads={this.state.pads}
        />
        <div className="container">
          <Audio />
          <h2>Use keyboard to play audio samples</h2>
        </div>
      </div>
    );
  }

}

export default App;
