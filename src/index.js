import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault();

    alert(JSON.stringify({}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required placeholder="Email" />
      <input name="password" type="password" required placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
