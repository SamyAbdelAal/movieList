import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { compose } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createStore, combineReducers } from "redux"; //STEP 1
import watchListReducer from "./store/reducers/UnwatchedMovies"; //STEP 2
import { Provider } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  rootWatchList: watchListReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
); //STEP 4

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
