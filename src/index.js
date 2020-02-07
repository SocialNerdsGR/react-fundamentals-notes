import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count => count + 1);

  return (
    <div>
      {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
