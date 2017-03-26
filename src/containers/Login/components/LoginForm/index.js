import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import { form as formStyle, marginTop} from './LoginFormStyle';


class LoginPage extends Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {};
  }

  handleLogin() {
    //TODO: Add form validation
    const {username, password} = this.state;
    if (username && password) {
      this.props.onLoginClick(username, password);
    }
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return <article className="mdl-grid">
    <h1 className="mdl-cell mdl-cell--12-col mdl-typography--text-center">Login</h1>
    <h2 className="mdl-cell mdl-cell--12-col mdl-typography--text-center">Welcome to Viridis</h2>
    <form onSubmit={this.onSubmit} className="mdl-cell--4-col-desktop mdl-cell--4-offset-desktop mdl-cell--12-col-tablet" style={marginTop}>
      <div style={formStyle}>
      <TextField
        hintText="Enter your email"
        floatingLabelText="Email"
        type="email"
        maxLength="50"
        name="username"
        onChange={this.onChange}
        fullWidth={true}
      /><br />
      <TextField
        hintText="Enter your password"
        floatingLabelText="Password"
        maxLength="50"
        type="password"
        name="password"
        onChange={this.onChange}
        fullWidth={true}
      /><br />
      </div>
      <div className="mdl-typography--text-center" style={marginTop}>
        <Button primary={true} onClick={this.handleLogin}>Login</Button>
      </div>
    </form>
    <div className="mdl-cell mdl-cell--12-col mdl-typography--text-center">
    Forgot Your Password? Reset your password here | Join now
    </div>
  </article>
  }
}

LoginPage.propTypes = {
  isLoging: PropTypes.bool,
  onLoginClick: PropTypes.func.isRequired
};


export default LoginPage;
