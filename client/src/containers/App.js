import React, { Component } from "react";

import Categories from "./Categories";
import Posts from "./Posts";
import Header from "../components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Readable" />
        <Categories />
        <Posts />
      </div>
    );
  }
}

export default App;
