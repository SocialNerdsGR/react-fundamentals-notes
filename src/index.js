import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(this.state));

    this.setState({
      email: '',
      password: '',
      error: ''
    });
  };

  handleFields = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  render() {
    const {email, password, error} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={this.handleFields}
        />
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={this.handleFields}
        />
        <input type="submit" value="Login"/>
      </form>
    );
  }
}

ReactDOM.render(<LoginForm/>, document.getElementById("root"));
