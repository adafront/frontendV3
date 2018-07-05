import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let targetOfGreeting = "world";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello {targetOfGreeting}
        </p>
        <button onClick={function() { alert('Hola'); }}>
        Click
        </button>
      </div>
    );
  }
}

export default App;
