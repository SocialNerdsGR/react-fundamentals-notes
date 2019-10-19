import React from "react";
import ReactDOM from "react-dom";

/**
 * - Difference from other DOM elements
 * - Controlled
 * - Input
 * - Checkox
 * - Select
 * - Multiple inputs
 * - Read-only
 */
class Form extends React.Component {
  render() {
    return (
      <form>
        <input type="text" value={} onChange={} />
        <select>
          <option>Java</option>
          <option>JavaScript</option>
          <option>Python</option>
        </select>
        <input type="checkbox" />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
