import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./store/configureStore";
import "./index.css";
import App from "./Containers/App/App";
import registerServiceWorker from "./registerServiceWorker";

import "spectre.css/dist/spectre.min.css";

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
