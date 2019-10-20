import React from "react";
import ReactDOM from "react-dom";

/**
 * - Use axios to load HN data
 * - https://hn.algolia.com/api/v1/search?query=react
 * - Render a list with the results
 * - Use only the title
 */
class HackerNews extends React.Component {}

ReactDOM.render(<HackerNews />, document.getElementById("root"));
