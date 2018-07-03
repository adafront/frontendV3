import React, { Component } from 'react';

class Form extends Component {

  constructor (props) {
    super(props);
      this.state = {
        email: '',
        password: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
      }
    }

  handleUserInput (e) {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value},() => { this.validateField(name, value) });
  }  

  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Email invalido';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        console.log(passwordValid);
        fieldValidationErrors.password = passwordValid ? '': ' Demasiado corta';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {

    this.setState({formValid: this.state.emailValid && this.state.passwordValid});

  }


  render() {

    return (
      <div className="Alta">
        <div className="errorPanel">
            <ul>
                <li>{this.state.formErrors.email}</li>
                <li>{this.state.formErrors.password}</li>               
            </ul>
        </div>

        <form>
          
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)}/>
          <label>Password:</label>
          <input type="text" name="password" value={this.state.pass} onChange={(event) => this.handleUserInput(event)}/>
          <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Ingresar</button>
        </form>

      </div>
    );
  }

}

export default Form;