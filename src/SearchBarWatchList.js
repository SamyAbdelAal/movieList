import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class SearchBarWatchList extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.filterUnwatchedMovies(event.target.value);
  }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterUnwatchedMovies: query =>
      dispatch(actionCreators.filterUnwatchedMovies(query))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBarWatchList);
