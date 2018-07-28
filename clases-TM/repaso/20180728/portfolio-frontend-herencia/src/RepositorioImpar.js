import React from 'react';
import Repositorio from './Repositorio';

class RepositorioPar extends Repositorio {
  constructor (props) {
    super(props)
  }

  render () {
    return super.render('alert-danger')
  }
}

export default RepositorioPar;
