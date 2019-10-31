import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class LoginForm extends React.Component {
  state = {
    error: '',
    email: '',
    password: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    if (email !== 'thanos@socialnerds.gr' || password !== '123456') {
      this.setState({error: 'Incorrect username or password'});
      return;
    }

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
        <div className="error">{error}</div>
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
        <input type="submit" value="Login" onChange={this.handleFields}/>
      </form>
    );
  }
}

ReactDOM.render(<LoginForm/>, document.getElementById("root"));
