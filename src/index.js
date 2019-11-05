import React from "react";
import ReactDOM from "react-dom";


function Authenticated(props) {
  return (
    <h1>Hello {props.name}</h1>
  );
}

function Guest() {
  return (
    <h1>Hello Guest</h1>
  );
}

class App extends React.Component {
  state = {
    authenticated: false
  };

  render() {
    if (this.state.authenticated) {
      return <Authenticated name={'Thanos'}/>
    }

    return <Guest />
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
