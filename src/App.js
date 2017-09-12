import React, { Component } from 'react';
import './App.css';
import PlayerInput from './PlayerInput';

class App extends Component {
  render() {
    return (
      <div>
        <p>Start as a standard player and continue as expert once done.</p>
        <PlayerInput />
      </div>
    );
  }
}

export default App;
