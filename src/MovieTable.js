import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

import MovieRow from "./MovieRow";

class MovieTable extends Component {
  render() {
    const movieRows = this.props.unwatchedMovies.map(movie => (
      <MovieRow key={movie.title} movie={movie} />
    ));
    return (
      <table className="mt-3 table table-responsive w-100">
        <thead />
        <tbody>{movieRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    unwatchedMovies: state.rootWatchList.unwatchedMovies,
    moviesFilter: state.rootWatchList.filterMovies
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
)(MovieTable);
