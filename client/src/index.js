import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import configureStore from "./store/configureStore";
import { loadCategories, loadAllPosts } from "./actions";
import "./index.css";
import App from "./containers/App";
import Post from "./containers/Post";
import NewPost from "./containers/NewPost";
import EditPost from "./containers/EditPost";
import NewComment from "./containers/NewComment";
import EditComment from "./containers/EditComment";
import registerServiceWorker from "./registerServiceWorker";
import defaultState from "./store/defaultState";

const store = configureStore(defaultState);
store.dispatch(loadAllPosts());
store.dispatch(loadCategories());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/all"} />} />
        <Route exact path="/post/new" component={NewPost} />
        <Route exact path="/post/edit/:postId" component={EditPost} />
        <Route exact path="/comment/new/:postId" component={NewComment} />
        <Route
          exact
          path="/comment/edit/:postId/:commentId"
          component={EditComment}
        />
        <Route path="/:/:postId" component={Post} />
        <Route path="/:category" component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
