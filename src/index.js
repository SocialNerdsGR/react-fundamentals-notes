import React from "react";
import ReactDOM from "react-dom";

const movies = [
  {
    "title": "Star Wars: Episode I - The Phantom Menace",
    "episode_number": "1"
  },
  {
    "title": "Star Wars: Episode II - Attack of the Clones",
    "episode_number": "2"
  },
  {
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "episode_number": "3"
  },
  {
    "title": "Star Wars: Episode IV - A New Hope",
    "episode_number": "4"
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "episode_number": "5"
  },
  {
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "episode_number": "6"
  }
];

class List extends React.Component{
  state = {
    movies
  };

  render() {
    return <ul></ul>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
