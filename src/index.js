import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "thanos@socialnerds.gr" || password !== "password") {
      setError("Incorrect username or password");
      return;
    }

    setError("");
    setEmail("");
    setPassword("");
    alert("You are logged in!");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="error">{error}</div>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" value="Login" onSubmit={handleSubmit} />
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
