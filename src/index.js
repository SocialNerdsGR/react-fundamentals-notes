import React from "react";
import ReactDOM from "react-dom";

/**
 * - What is lifecycle methods
 * - Register events
 * - Clear events
 */
class Lifecycle extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById("root"));
