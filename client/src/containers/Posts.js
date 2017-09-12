import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import Post from "../components/Post";
import Sort from "../components/Sort";

class Posts extends React.Component {
  componentDidMount = () => {
    this.props.setCurrentSort("voteScore");
  };

  onChange = event => {
    this.props.setCurrentSort(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h1>Posts</h1>
        <div>
          Sorted by:
          <span>
            <Sort
              fields={["voteScore", "timestamp"]}
              onChange={this.onChange}
            />
          </span>
        </div>
        <ul>
          {this.props.postsForCategory.map((post, i) => (
            <Post key={i} {...post} />
          ))}
        </ul>
      </div>
    );
  };
}

Posts.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, props) {
  const posts =
    state.currentCategory === "all"
      ? state.posts
      : state.posts.filter(post => post.category === state.currentCategory);

  const sortKey = state.currentSort;

  return {
    postsForCategory: posts.concat().sort((a, b) => b[sortKey] - a[sortKey])
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
