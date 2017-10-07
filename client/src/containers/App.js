import React, { Component } from "react";
import { connect } from "react-redux";

import Spinner from "react-spinkit";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Categories from "./Categories";
import PostSummaries from "./PostSummaries";
import Header from "../components/Header";

const spinnerStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

class App extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner name="three-bounce" fadeIn="half" style={spinnerStyle} />;
    } else {
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
}

function mapStateToProps({ loading }, props) {
  return { loading };
}

export default connect(mapStateToProps)(App);
