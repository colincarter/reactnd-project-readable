import React, { Component } from "react";

import Categories from "./Categories";
import PostSummaries from "./PostSummaries";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Readable" />
        <Categories />
        <PostSummaries />
      </div>
    );
  }
}

export default App;
