import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Post from "../components/Post";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.props.postsForCategory.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  postsForCategory: PropTypes.arrayOf(Object).isRequired
};

function mapStateToProps(state, props) {
  return {
    postsForCategory:
      state.currentCategory === "all"
        ? state.posts
        : state.posts.filter(post => post.category === state.currentCategory)
  };
}

export default connect(mapStateToProps)(Posts);
