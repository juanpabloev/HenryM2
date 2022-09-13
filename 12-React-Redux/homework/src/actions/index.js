export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIES = "GET_MOVIES";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";

export function addMovieFavorite(movie) {
  return { type: ADD_MOVIE_FAVORITE, payload: movie };
}

export function removeMovieFavorite(movie) {
  return { type: REMOVE_MOVIE_FAVORITE, payload: movie };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=d4cfd839&i=" + id)
      .then((response) => response.json())
      .then((detail) => {
        dispatch({ type: GET_MOVIE_DETAILS, payload: detail });
      });
  };
}

export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=d4cfd839&s=" + titulo)
      .then((response) => response.json())
      .then((movie) => {
        dispatch({ type: GET_MOVIES, payload: movie });
      });
  };
}
