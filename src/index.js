import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

/**
 * @hints
 * state:  const [value, setValue] = useState(initialValue);
 * input: value, onChange
 * form, input: onSubmit
 * @end
 */
/**
 * - Handle input changes
 * - Check user credentials
 * - On failed login
 * -- Show error message
 * - On successful login
 * -- Clear inputs
 * -- Clear error
 * -- Alert user login
 */
function LoginForm() {
  return (
    <form>
      <div className="error">Incorrect username or password</div>
      <input name="email" type="email" required placeholder="Email" />
      <input name="password" type="password" required placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
