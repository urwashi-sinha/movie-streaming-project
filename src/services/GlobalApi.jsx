import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "3182651b8545a8cc8cdeee40d1dadbcd";

//https://api.themoviedb.org/3/trending/all/day?api_key=3182651b8545a8cc8cdeee40d1dadbcd

const getTrendingVideos = axios.get(
  movieBaseUrl + "trending/all/day?api_key=" + api_key
);

// Get movies by genre
const getMovieByGenreId = (id) =>
  axios.get(
    movieBaseUrl +
      `discover/movie?api_key=${api_key}&with_genres=${id}`
  );


export default { getTrendingVideos, getMovieByGenreId };
