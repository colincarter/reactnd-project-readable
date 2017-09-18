import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import Paper from "material-ui/Paper";

import * as actionCreators from "../actions";
import Sort from "../components/Sort";
import PostSummaryLine from "../components/PostSummaryLine";
import Header from "../components/Header";

class Post extends React.Component {
  componentDidMount = () => {
    this.props.loadCommentsForPost(this.props.match.params.postId);
  };

  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  style = {
    height: 100,
    width: 400,
    marginLeft: 10,
    marginRight: 10,
    // textAlign: "center",
    display: "inline-block"
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header title="Readable" />
          <Paper style={this.style} zDepth={2}>
            <p>Hello</p>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state, props) {
  const sortKey = state.currentSort;
  const postId = props.match.params.postId;

  return {
    comments: state.comments.concat().sort((a, b) => b[sortKey] - a[sortKey]),
    post: state.posts.find(post => post.id === postId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
