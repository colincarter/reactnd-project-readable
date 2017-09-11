import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "../components/Post";
import Sort from "../components/Sort";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <div>
          Sorted by:
          <span>
            <Sort fields={["voteScore", "timestamp"]} />
          </span>
        </div>
        <ul>
          {this.props.postsForCategory.map((post, i) => (
            <Post key={i} {...post} />
          ))}
        </ul>
      </div>
    );
  }
}

Posts.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, props) {
  const posts =
    state.currentCategory === "all"
      ? state.posts
      : state.posts.filter(post => post.category === state.currentCategory);

  return {
    postsForCategory: posts.sort((a, b) => b.voteScore - a.voteScore)
  };
}

export default connect(mapStateToProps)(Posts);
