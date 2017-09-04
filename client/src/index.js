import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import { loadCategories, loadAllPosts } from "./actions";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import defaultState from "./store/defaultState";
import "spectre.css/dist/spectre.min.css";

const store = configureStore(defaultState);
store.dispatch(loadCategories());
store.dispatch(loadAllPosts());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
