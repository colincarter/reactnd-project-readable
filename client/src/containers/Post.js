import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Toolbar, ToolbarGroup, ToolbarTitle } from "material-ui/Toolbar";
import { List, ListItem } from "material-ui/List";

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
              <span>{this.props.post.timestamp}</span>
            </p>

            <List>
              {this.props.comments.map((comment, i) => (
                <ListItem
                  key={i}
                  primaryText={comment.body}
                  secondaryText={
                    <p>
                      {comment.author} <span>{comment.timestamp}</span>
                    </p>
                  }
                />
              ))}
            </List>
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
  post: PropTypes.object.isRequired
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
