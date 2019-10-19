import React from "react";
import ReactDOM from "react-dom";

/**
 * - camelCase
 * - preventDefault
 * - Syntethic events
 * - Binding
 * - Parameters
 * - Disable handler
 * - Function components
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <a href="#">Link</a>
        <button>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
