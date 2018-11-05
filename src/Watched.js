import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import SearchBarWatched from "./SearchBarWatched";

import MovieRow from "./MovieRow";

class Watched extends Component {
  componentDidUpdate() {}
  render() {
    const movieRows = this.props.moviesFilter.map(movie => (
      <MovieRow key={movie.title} movie={movie} />
    ));
    return (
      <div>
        <SearchBarWatched />

        <table className="mt-3 table table-responsive w-100">
          <thead />
          <tbody>{movieRows}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    watchedMovies: state.rootWatchList.watchedMovies,
    moviesFilter: state.rootWatchList.filterWatchedMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovie: () => dispatch(actionCreators.addMovie()),
    deleteMovie: () => dispatch(actionCreators.deleteMovie())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watched);
