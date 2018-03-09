import React from 'react';
import { withRouter } from 'react-router';
import FormErrors from './FormErrors';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind();
    this.handleSubmit = this.handleSubmit.bind();
    this.validateField = this.validateField.bind();
    this.validateForm = this.validateForm.bind();
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    },
    () => {this.validateField(name, value)});
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.errors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.password;

    switch(fieldName) {
      case 'email':
        emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      errors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form
          className="loginForm container flow-col"
          onChange={e => this.handleChange(e)}
          onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email" placeholder="JohnDoe@gmail.com"
            value={this.state.email} />
            <br/>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Potatoes25"
            value={this.state.password} />
          <button
          type="submit" disabled={!this.state.formValid}>Login</button>
        </form>
        <div className="panel">
        <FormErrors formErrors={this.state.errors} />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
