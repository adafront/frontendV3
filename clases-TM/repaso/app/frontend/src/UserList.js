import React, { Component } from 'react';

class UserList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      usuarios: []
    }
  }

  componentDidMount () {
    fetch ('/api/users')
      .then(res => res.json())
      .then(usuarios => {
        this.setState({ usuarios })
      })
  }

  render() {
    return (
      <ul>
        {this.state.usuarios.map(u => <li>{u.name}</li>)}
      </ul>
    );
  }
}

export default UserList;
