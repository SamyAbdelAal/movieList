import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import WatchList from "./WatchList";
import Watched from "./Watched";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let movie = {
      title: this.textInput.value,
      watched: false
    };
    this.props.createMovie(movie);
    this.props.addMovie(movie);
  }
  render() {
    return (
      <div id="app" className="container w-100">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              ref={input => (this.textInput = input)}
            />
          </label>
          <input type="submit" value="submit" />
        </form>
        <div className="row">
          <div className="content col-6">
            <h1> WatchList</h1>
            <WatchList />
          </div>
          <div className="content col-6">
            <h1> WatchedList</h1>
            <Watched />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.rootWatchList.movies,
    moviesFilter: state.rootWatchList.filterMovies,
    movie: state.rootWatchList.movie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMovie: movie => dispatch(actionCreators.createMovie(movie)),
    addMovie: movie => dispatch(actionCreators.addMovie(movie))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
