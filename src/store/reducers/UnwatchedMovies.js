import * as actionTypes from "../actions/actionTypes";

const initialState = {
  unwatchedMovies: [],
  filterWatchedMovies: [],
  filterUnwatchedMovies: [],
  watchedMovies: [],
  movie: {}
};

const watchListReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCH_MOVIES:
    //   return {
    //     ...state,
    //     unwatchedMovies: action.payload,
    //     loading: false,
    //     filterMovies: action.payload
    //   };
    case actionTypes.CREATE_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    case actionTypes.FILTER_UNWATCHED_MOVIES:
      return {
        ...state,
        filterUnwatchedMovies: state.unwatchedMovies.filter(movie => {
          return `${movie.title}`.toLowerCase().includes(action.payload);
        })
      };
    case actionTypes.FILTER_WATCHED_MOVIES:
      return {
        ...state,
        filterWatchedMovies: state.watchedMovies.filter(movie => {
          return `${movie.title}`.toLowerCase().includes(action.payload);
        })
      };
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        unwatchedMovies: state.unwatchedMovies.concat(action.payload)
      };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        unwatchedMovies: state.unwatchedMovies.filter(
          movie => movie !== action.payload
        )
      };
    case actionTypes.WATCH_MOVIE:
      return {
        ...state,
        unwatchedMovies: state.unwatchedMovies.filter(
          movie => movie !== action.payload
        ),
        watchedMovies: state.watchedMovies.concat(action.payload)
      };
    case actionTypes.UNWATCH_MOVIE:
      return {
        ...state,
        watchedMovies: state.watchedMovies.filter(
          movie => movie !== action.payload
        ),
        unwatchedMovies: state.unwatchedMovies.concat(action.payload)
      };
    default:
      return state;
  }
};

export default watchListReducer;
