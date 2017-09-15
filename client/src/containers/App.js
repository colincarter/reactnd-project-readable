import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Categories from "./Categories";
import PostSummaries from "./PostSummaries";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" />
          <Categories />
          <PostSummaries />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
