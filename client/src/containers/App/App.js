import React, { Component } from "react";

import Categories from "../Categories/Categories";
import Header from "../../components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Readable" />
        <Categories />
      </div>
    );
  }
}

export default App;
