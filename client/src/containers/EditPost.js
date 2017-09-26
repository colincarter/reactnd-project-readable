import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actionCreators from "../actions";

class EditPost extends React.Component {
  render() {
    return <h2>{this.props.post.id}</h2>;
  }
}

function mapStateToProps(state, props) {
  return {
    post: state.posts.find(post => post.id === props.match.params.postId)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
