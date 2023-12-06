import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="Movie-image" width={"400"} />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    searchMovie(q).then((results) => {
      setPopularMovies(results);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <input type="search" name="search" id="" placeholder="Cari film disini..." className="Movie-search" onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
