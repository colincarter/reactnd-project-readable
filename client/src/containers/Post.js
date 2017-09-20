import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import * as actionCreators from "../actions";
import Header from "../components/Header";
import Comments from "../components/Comments";

import formattedTimestamp from "../lib/formattedTimestamp";

class Post extends React.Component {
  componentDidMount = () => {
    this.props.loadCommentsForPost(this.props.match.params.postId);
  };

  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  };

  render() {
    if (!this.props.post) {
      return null;
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Header title="Readable" history={this.props.history} />
            <h3>
              {this.props.post.voteScore} <span>{this.props.post.title}</span>
            </h3>
            <p>{this.props.post.body}</p>
            <p>
              {this.props.post.author}

              <span>{formattedTimestamp(this.props.post.timestamp)}</span>
            </p>

            <Comments comments={this.props.comments} />

            <FloatingActionButton style={this.style}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  loadCommentsForPost: PropTypes.func.isRequired,
  post: PropTypes.object
};

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
