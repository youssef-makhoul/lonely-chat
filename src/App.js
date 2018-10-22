import React, { Component } from 'react';
import './App.css';
import LonelyChat from './LonelyChat';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div><LonelyChat Bot="Josie" ResponseTime={Math.floor(Math.random()*3)}/></div>
      <div><LonelyChat Bot="Frederic" ResponseTime="2"/></div>
      </div>
    );
  }
}

export default App;
