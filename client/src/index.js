import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import "./index.css";
import App from "./Containers/App/App";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore({});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
