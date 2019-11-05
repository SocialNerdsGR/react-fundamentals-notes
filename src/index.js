import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    authenticated: false
  };

  render() {
    return <div>Welcome Guest!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
