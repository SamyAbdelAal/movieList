import * as actionTypes from "./actionTypes";

// export const fetchMovies = movies => {
//   return {
//     type: actionTypes.FETCH_MOVIES,
//     payload: movies
//   };
// };

export const createMovie = movie => {
  return {
    type: actionTypes.CREATE_MOVIE,
    payload: movie
  };
};

export const filterUnwatchedMovies = query => {
  return {
    type: actionTypes.FILTER_UNWATCHED_MOVIES,
    payload: query
  };
};
export const filterWatchedMovies = query => {
  return {
    type: actionTypes.FILTER_WATCHED_MOVIES,
    payload: query
  };
};

export const addMovie = movie => {
  return {
    type: actionTypes.ADD_MOVIE,
    payload: movie
  };
};

export const deleteMovie = movie => {
  return {
    type: actionTypes.DELETE_MOVIE,
    payload: movie
  };
};
export const watchedMovie = movie => {
  movie.watched = !movie.watched;
  return {
    type: actionTypes.WATCH_MOVIE,
    payload: movie
  };
};

export const unwatchedMovie = movie => {
  movie.watched = !movie.watched;
  return {
    type: actionTypes.UNWATCH_MOVIE,
    payload: movie
  };
};
