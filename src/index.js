import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: this.props.count
  };

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({count: count + this.props.count});
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({count: count - this.props.count});
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


ReactDOM.render(<Counter step={2} count={5} />, document.querySelector("#root"));
