import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(JSON.stringify({ email, password }));
    setEmail("");
    setPassword("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
