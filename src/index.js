import React from "react";
import ReactDOM from "react-dom";

const movies = [
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    episode_number: "1"
  },
  {
    title: "Star Wars: Episode II - Attack of the Clones",
    episode_number: "2"
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    episode_number: "3"
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    episode_number: "4"
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    episode_number: "5"
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    episode_number: "6"
  }
];

function Movie({ title }) {
  return <li>{title}</li>;
}

class List extends React.Component {
  state = {
    movies
  };

  render() {
    const { movies } = this.state;
    const bestMovies = movies.filter(movie => movie.episode_number > 3);

    return (
      <React.Fragment>
        <h1>Star wars movies</h1>
        <ul>
          {movies.map(movie => (
            <li key={movie.episode_number}>{movie.title}</li>
          ))}
        </ul>
        <h1>Separate component</h1>
        <ul>
          {movies.map(movie => (
            <Movie key={movie.episode_number} title={movie.title} />
          ))}
        </ul>
        <h1>Best movies</h1>
        <ul>
          {bestMovies.map(movie => (
            <li key={movie.episode_number}>{movie.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
