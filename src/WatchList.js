import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import SearchBarWatchList from "./SearchBarWatchList";

import MovieRow from "./MovieRow";

class WatchList extends Component {
  render() {
    const movieRows = this.props.moviesFilter.map(movie => (
      <MovieRow key={movie.title} movie={movie} />
    ));
    return (
      <div>
        <SearchBarWatchList />

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
    unwatchedMovies: state.rootWatchList.unwatchedMovies,
    moviesFilter: state.rootWatchList.filterUnwatchedMovies
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
)(WatchList);
