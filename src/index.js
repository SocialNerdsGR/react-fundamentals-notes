import React from "react";
import ReactDOM from "react-dom";

class Lifecycle extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById("root"));
