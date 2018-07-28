import React, { Component } from 'react';

class Repositorio extends Component {
  constructor (props) {
    super(props)
  }

  render (alertType) {
    return (
      <div className={"alert " + alertType} role="alert">
        <a class="algo-particular" target="_blank" href={this.props.repo.url}>{this.props.repo.nombre}</a>
      </div>
    )
  }
}

export default Repositorio;
