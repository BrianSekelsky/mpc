import React, { Component } from 'react';
import './App.css';
import Pads from './components/pads'
import Filebrowser from './components/filebrowser'

class App extends Component {

  state={
      pads: [
      { key: 1, datakey: 49, name: '1', title:'woodblock1' },
      { key: 2, datakey: 50, name: '2', title:'woodblock2'},
      { key: 3, datakey: 51, name: '3', title:'foley 1' },
      { key: 4, datakey: 52, name: '4', title:'foley 2' },
      { key: 5, datakey: 81, name: 'Q', title:'hat 3' },
      { key: 6, datakey: 87, name: 'W', title:'hat4'},
      { key: 7, datakey: 69, name: 'E', title:'ride'},
      { key: 8, datakey: 82, name: 'R', title:'shake' },
      { key: 9, datakey: 65, name: 'A', title:'hat1' },
      { key: 10, datakey: 83, name: 'S', title:'hat2' },
      { key: 11, datakey: 68, name: 'D', title:'clap' },
      { key: 12, datakey: 70, name: 'F', title:'timbale' },
      { key: 13, datakey: 90, name: 'Z', title:'kick' },
      { key: 14, datakey: 88, name: 'X', title:'snare' },
      { key: 15, datakey: 67, name: 'C', title:'bongo 1' },
      { key: 16, datakey: 86, name: 'V', title:'bongo 2' }

    ]
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Finger Drummer</h1>
          <div className="pads">
            <Pads
              pads={this.state.pads}
            />
          </div>
          <h3>Play keys or touch on mobile to play samples</h3>
        </div>
      </div>
    );
  }

}

export default App;
