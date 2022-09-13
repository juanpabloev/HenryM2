import {
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAILS,
} from "../actions";

const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetails: {},
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };
    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: [...state.moviesFavorites, action.payload],
      };
    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(function (element) {
          return element !== action.payload;
        }),
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
