import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <a href="#">Link</a>
        <button>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
