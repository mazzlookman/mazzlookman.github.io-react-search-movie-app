import axios from "axios";

export const getMovieList = async () => {
  const getMovies = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`);
  return getMovies.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&api_key=${process.env.REACT_APP_APIKEY}`);
  return search.data.results;
};
