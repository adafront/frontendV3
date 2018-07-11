import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let frutas = ['Anana', 'Banana', 'Kiwi'];
       
        return (
            <select className="frutas">
                {frutas.map(function(value, index){
                    return <option key={index} value={ index }>{value}</option>;
                  })}
            </select>
    );
  }
}

export default App;

