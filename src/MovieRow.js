import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class MovieRow extends Component {
  // watchMovie(movie) {
  //   this.props.watchedMovie(movie);
  //   // this.props.movie.watched = !this.props.movie.watched;
  // }

  watch(movie) {
    if (movie.watched) {
      return (
        <button
          className="btn btn-primary"
          onClick={() => this.props.unwatchedMovie(movie)}
        >
          Unwatch
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-primary"
          onClick={() => this.props.watchedMovie(movie)}
        >
          Watch
        </button>
      );
    }
  }
  render() {
    const movie = this.props.movie;
    return (
      <tr>
        <td>{movie.title}</td>
        <td> {this.watch(movie)}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteMovie(movie);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    watchedMovie: movie => dispatch(actionCreators.watchedMovie(movie)),
    unwatchedMovie: movie => dispatch(actionCreators.unwatchedMovie(movie)),
    deleteMovie: movie => dispatch(actionCreators.deleteMovie(movie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MovieRow);
