import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class HackerNews extends React.Component {
  state = {
    news: []
  };

  async componentDidMount() {
    const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
    this.setState({news: response.data.hits});
  }

  render() {
    return <ul>
      {
        this.state.news.map((item => {
          return <li key={item.objectID}>
            {item.title}
          </li>
        }))
      }
    </ul>
  }
}

ReactDOM.render(<HackerNews/>, document.getElementById("root"));
