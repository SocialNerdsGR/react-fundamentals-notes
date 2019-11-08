import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({count: count + 1});
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.querySelector("#root"));
