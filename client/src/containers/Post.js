import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import * as actionCreators from "../actions";
import Header from "../components/Header";
import VotingButtons from "../components/VotingButtons";
import Comments from "./Comments";

import formattedTimestamp from "../lib/formattedTimestamp";

class Post extends React.Component {
  onSortChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  incVoteScore = post => {
    this.props.incVoteScore(post);
  };

  decVoteScore = post => {
    this.props.decVoteScore(post);
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
              <VotingButtons
                post={this.props.post}
                incVoteScore={this.incVoteScore}
                decVoteScore={this.decVoteScore}
              />
            </h3>
            <p>{this.props.post.body}</p>
            <p>
              {this.props.post.author} | {" "}
              <span>{formattedTimestamp(this.props.post.timestamp)}</span> | {" "}
              <span>{this.props.comments.length} comments</span>
            </p>

            <Comments comments={this.props.comments} post={this.props.post} />
          </div>
        </MuiThemeProvider>
      );
    }
  }
}

Post.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  post: PropTypes.object
};

function mapStateToProps(state, props) {
  const sortKey = state.currentSort;
  const postId = props.match.params.postId;
  const post = state.posts.find(post => post.id === postId);

  return {
    post: post,
    comments: post
      ? post.comments.concat().sort((a, b) => b[sortKey] - a[sortKey])
      : []
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
