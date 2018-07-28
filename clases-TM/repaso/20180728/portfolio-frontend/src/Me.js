import React, { Component } from 'react';
import './Me.css';

class Me extends Component {
  constructor (props) {
    super(props)

    this.state = {
      usuario: {}
    }
  }

  async componentDidMount () {
    let response = await fetch('/me')
    let misDatos = await response.json()

    this.setState({
      usuario: misDatos
    })
  }

  render() {
    return (
      <div className="row mis-datos">
        <div className="col-sm-6 col-md-offset-4 col-md-4">
          <div className="thumbnail">
            <img src="http://thecatapi.com/api/images/get?format=src&type=gif" />

            <div className="caption">
              <h3>{this.state.usuario.nombre} {this.state.usuario.apellido}</h3>
              <p>Edad: {this.state.usuario.edad}</p>
              <p>Email: {this.state.usuario.email}</p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Me;
