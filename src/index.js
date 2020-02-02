import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function useForm(initialValue) {
  const [state, setState] = useState(initialValue);

  function fieldHandler(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  }

  function clearFields() {
    setState(
      Object.keys(state).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {})
    );
  }

  return [state, fieldHandler, clearFields];
}

function LoginForm() {
  const [{ email, password }, fieldHandler, clearFields] = useForm({
    email: "",
    password: ""
  });
  function handleSubmit(event) {
    event.preventDefault();

    alert(JSON.stringify({ email, password }));
    clearFields();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        value={email}
        onChange={fieldHandler}
      />
      <input
        name="password"
        type="password"
        required
        placeholder="Password"
        value={password}
        onChange={fieldHandler}
      />
      <input type="submit" value="Login" />
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
