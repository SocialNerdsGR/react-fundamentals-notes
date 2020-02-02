import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: this.props.count
  };

  handleIncrement = () => {
    this.setState({ count: this.statecount + this.props.step });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - this.props.step });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter step={2} count={5} />,
  document.querySelector("#root")
);
