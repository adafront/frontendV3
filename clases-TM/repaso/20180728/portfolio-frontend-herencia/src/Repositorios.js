import React, { Component } from 'react';
import './Repositorios.css';
import Spinner from './Spinner.js';
import RepositorioPar from './RepositorioPar.js';
import RepositorioImpar from './RepositorioImpar.js';

class Repositorios extends Component {
  constructor (props) {
    super(props)

    this.state = {
      repositorios: [],
      loading: true,
      error: null
    }
  }

  async componentDidMount () {
    let response = await fetch('/repositorios')
    let data = await response.json()

    if (response.ok) {
      this.setState({
        repositorios: data,
        loading: false
      })
    } else {
      this.setState({
        error: data.message,
        loading: false
      })
    }
  }

  renderRepo (elRepo, i) {
    return i % 2 === 0 ? <RepositorioPar repo={elRepo}/> : <RepositorioImpar repo={elRepo}/>
  }

  render() {
    let repos = this.state.repositorios.map(this.renderRepo)

    return (
      <div className="row mis-repos">
        <div className="col-sm-6 col-md-offset-4 col-md-4">
          {
            this.state.loading ? <Spinner /> : (this.state.error ? this.state.error : repos)
          }
        </div>
      </div>
    );
  }
}

export default Repositorios;
