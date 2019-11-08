import React from "react";
import ReactDOM from "react-dom";
import "./style.css";


class LoginForm extends React.Component {
  state = {
  };

  handleFieldsChange = (event) => {

  };

  handleSubmit = (event) => {

    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <form>
        <input name="email" type="email" required placeholder="Email" />
        <input name="password" type="password" required placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
