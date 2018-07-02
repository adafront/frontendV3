import React, { Component } from 'react';
import logo from './logo.svg';
import foto1 from './edificio1.png';
import './App.css';
import Header from './components/Header.js';

class App extends  Component {

  render() {

    let titulo = "Japón planea construir el edificio de madera mas alto del mundo.";

    return (
      <div className="App">
        <Header/>
        <div className="cuerpo">
          <img src={foto1} alt="foto 1" />
        <p className="App-intro">
          
        </p>
        </div>
      </div>
    );
  }
}

export default App;
