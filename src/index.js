import React from "react";
import ReactDOM from "react-dom";

class Lifecycle extends React.Component {
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update");
    return true;
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return <h1>Hello world!</h1>;
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById("root"));
