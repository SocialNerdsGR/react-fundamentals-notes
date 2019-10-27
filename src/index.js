import React from "react";
import ReactDOM from "react-dom";

/**
 * - axios.get('https://hn.algolia.com/api/v1/search?query=react')
 */
class HackerNews extends React.Component {
  state = {
    news: []
  };

  async componentDidMount() {
    // Implement HTTP request here.
  }

  render() {
    return <ul>
      {
        this.state.news.map((item => {
          return <li>
          {/*  Render each item here  */}
          </li>
        }))
      }
    </ul>
  }
}

ReactDOM.render(<HackerNews />, document.getElementById("root"));
