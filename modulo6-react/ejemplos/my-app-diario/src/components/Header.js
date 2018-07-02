import React, { Component } from 'react';

class Header extends  Component {

  render() {

    let titulo = "Japón planea construir el edificio de madera mas alto del mundo.";

    return (
      
        <header>
          <h1>{titulo}</h1>
        </header>
    )
  }
}        

export default Header;