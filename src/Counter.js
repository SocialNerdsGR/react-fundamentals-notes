import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleIncrement}>Increment!</button>
      </div>
    );
  }
}
